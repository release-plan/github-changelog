import fs from 'node:fs';
import path from 'node:path';
import hostedGitInfo from 'hosted-git-info';
import { getPackagesSync } from '@manypkg/get-packages';

import ConfigurationError from './configuration-error.js';
import { getRootPath } from './git.js';
import { cosmiconfigSync } from 'cosmiconfig';

/**
 * @typedef {Object} Configuration
 * @property {string} repo
 * @property {string} [github]
 * @property {string} rootPath
 * @property {{ [key: string]: string }} labels
 * @property {string[]} ignoreCommitters
 * @property {string} ignoreLabel
 * @property {string} [cacheDir]
 * @property {boolean} [ignoreReleases]
 * @property {string|undefined} nextVersion
 * @property {boolean} [nextVersionFromMetadata]
 * @property {string} [wildcardLabel]
 * @property {{ name: string; path: string }[]} packages
 */

/**
 * @typedef {Object} ConfigLoaderOptions
 * @property {string} [repo]
 * @property {boolean} [nextVersionFromMetadata]
 */

/**
 * Loads our config - this is the main entrypoint for loading config
 *
 * @param {ConfigLoaderOptions} options
 * @returns {Configuration}
 */
export function load(options) {
  const rootPath = getRootPath();
  return fromPath(rootPath, options);
}

/**
 * @param {string} rootPath
 * @returns {{name: string, path: string }[]}
 */
function getPackages(rootPath) {
  try {
    const { packages } = getPackagesSync(rootPath);

    const result = packages
      .filter(pkg => !pkg.packageJson.private)
      .map(pkg => ({
        name: pkg.packageJson.name,
        path: pkg.dir,
      }));

    /**
     * The fixes the case where you have a root package and packages in some sub-folder. We always
     * want other systems to match on longer package paths first so that you find the right leaf
     * package when building a changelog.
     */
    result.sort((a, b) => b.path.length - a.path.length);
    return result;
  } catch (e) {
    // Pre-existing lerna-changelog (from before the fork) behavior returns []
    // when something goes wrong with package discovery.
    // The error is logged here, just in case it's helpful for folks
    // to debug their projects.
    //
    // Mainly:
    // - packages must have a name when not using private=true
    // - at least one package.json must exist
    //
    // In practice, folks shouldn't see this error at all
    console.error(e);
    return [];
  }
}

/**
 * Load config from file or package.json using [cosmiconfig](https://github.com/cosmiconfig/cosmiconfig)
 *
 * @param {string} rootPath
 * @returns {Object} config
 */
function getConfig(rootPath) {
  const explorerSync = cosmiconfigSync('changelog');

  const searchedFor = explorerSync.search(rootPath)?.config ?? {};

  // TODO do some "type narrowing" here;

  return searchedFor;
}

/**
 *
 * @param {string} rootPath
 * @param {ConfigLoaderOptions} options
 * @returns {Configuration} config
 */
function fromPath(rootPath, options = {}) {
  // Step 1: load partial config via cosmiconfig
  const config = getConfig(rootPath);

  if (options.repo) {
    config.repo = options.repo;
  }

  // Step 2: fill partial config with defaults
  const { cacheDir, github } = config;
  let { repo, nextVersion, labels, ignoreCommitters, ignoreLabel, wildcardLabel } = config;

  const packages = getPackages(rootPath);

  if (!repo) {
    repo = findRepo(rootPath);
    if (!repo) {
      throw new ConfigurationError('Could not infer "repo" from the "package.json" file.');
    }
  }

  if (options.nextVersionFromMetadata || config.nextVersionFromMetadata) {
    nextVersion = findNextVersion(rootPath);

    if (!nextVersion) {
      throw new ConfigurationError('Could not infer "nextVersion" from the "package.json" file.');
    }
  }

  if (!labels) {
    labels = {
      breaking: ':boom: Breaking Change',
      enhancement: ':rocket: Enhancement',
      bug: ':bug: Bug Fix',
      documentation: ':memo: Documentation',
      internal: ':house: Internal',
    };
  }

  if (!wildcardLabel) {
    wildcardLabel = `_github-changelog_unlabeled_`;
  }

  if (wildcardLabel && !labels[wildcardLabel]) {
    labels[wildcardLabel] = ':present: Additional updates';
  }

  if (!ignoreCommitters) {
    ignoreCommitters = [
      'dependabot-bot',
      'dependabot[bot]',
      'dependabot-preview[bot]',
      'greenkeeperio-bot',
      'greenkeeper[bot]',
      'renovate-bot',
      'renovate[bot]',
    ];
  }

  if (!ignoreLabel) {
    ignoreLabel = 'ignore';
  }

  return {
    repo,
    nextVersion,
    rootPath,
    labels,
    ignoreCommitters,
    ignoreLabel,
    cacheDir,
    wildcardLabel,
    packages,
    github,
  };
}

/**
 *
 * @param {string} rootPath
 * @returns {string|undefined}
 */
function findRepo(rootPath) {
  const pkgPath = path.join(rootPath, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    return;
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (!pkg.repository) {
    return;
  }

  return findRepoFromPkg(pkg);
}

/**
 *
 * @param {string} rootPath
 * @returns {string|undefined}
 */
function findNextVersion(rootPath) {
  const pkgPath = path.join(rootPath, 'package.json');
  const lernaPath = path.join(rootPath, 'lerna.json');

  const pkg = fs.existsSync(pkgPath) ? JSON.parse(fs.readFileSync(pkgPath, 'utf8')) : {};
  const lerna = fs.existsSync(lernaPath) ? JSON.parse(fs.readFileSync(lernaPath, 'utf8')) : {};

  return pkg.version ? `v${pkg.version}` : lerna.version ? `v${lerna.version}` : undefined;
}

/**
 * This function is intended to extract the repository from whatever is written in package.json
 * TODO review other packages that can be doing this for us and are better tested
 *
 * @param {{repository: {url: string} | string}} pkg
 * @returns {string|undefined} repository in the format <org>/<repo-name>
 */
export function findRepoFromPkg(pkg) {
  // @ts-expect-error ignore for now
  const url = pkg.repository.url || pkg.repository;
  const info = hostedGitInfo.fromUrl(url);
  if (info && info.type === 'github') {
    return `${info.user}/${info.project}`;
  }
  // cannot detect self hosted GitHub, e.g
  // git@github.host.com:embroider-build/github-changelog.git
  // https://github.host.com/embroider-build/github-changelog.git
  const matchHttps = /https:\/\/[^/]+\/([^/]+)\/([^/]+)\.git/.exec(url);
  if (matchHttps && matchHttps.length === 3) {
    return `${matchHttps[1]}/${matchHttps[2]}`;
  }
  const matchGit = /git@[^:]+:([^/]+)\/([^/]+)\.git/.exec(url);
  if (matchGit && matchGit.length === 3) {
    return `${matchGit[1]}/${matchGit[2]}`;
  }
}
