import fs from 'fs-extra';
import path from 'path';
import tmp from 'tmp';

import { findRepoFromPkg, load } from './configuration.js';
import ConfigurationError from './configuration-error.js';

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
let tmpDir;
let tmpobj;

vi.mock('./git', () => ({
  getRootPath() {
    return tmpDir;
  },
}));

describe('Configuration', function () {
  describe('fromPath', function () {
    beforeEach(function () {
      tmpobj = tmp.dirSync({ unsafeCleanup: true });
      tmpDir = tmpobj.name;
    });

    afterEach(function () {
      tmpobj.removeCallback();
    });

    it("reads the configuration from a lilconfig location e.g. '.changelogrc.json'", function () {
      fs.writeJsonSync(path.join(tmpDir, '.changelogrc.json'), { repo: 'foo/bar', nextVersion: 'next' });
      fs.writeJsonSync(path.join(tmpDir, 'package.json'), {
        name: 'bar',
      });

      const result = load();
      expect(result.nextVersion).toEqual('next');
      expect(result.repo).toEqual('foo/bar');
    });

    it("ignores private packages'", function () {
      fs.writeJsonSync(path.join(tmpDir, 'package.json'), {
        name: 'bar',
        private: true,
      });

      const result = load({
        repo: 'foo/bar',
      });
      expect(result.nextVersion).toEqual(undefined);
      expect(result.repo).toEqual('foo/bar');
      expect(result.packages).toEqual([]);
    });

    it("reads the configuration from 'package.json'", function () {
      fs.writeJsonSync(path.join(tmpDir, 'package.json'), {
        name: 'test-app',
        changelog: { repo: 'foo/bar', nextVersion: 'next' },
      });

      const result = load();
      expect(result.nextVersion).toEqual('next');
      expect(result.repo).toEqual('foo/bar');
    });

    it('throws ConfigurationError if all potential lilconfig locations are missing (e.g. package.json or .changelogrc.json)', function () {
      expect(() => load()).toThrowError(ConfigurationError);
    });

    it('uses passed in `repo` option', function () {
      const result = load({ repo: 'foo/bar' });
      expect(result.nextVersion).toEqual(undefined);
      expect(result.repo).toEqual('foo/bar');
    });
  });

  describe('findRepoFromPkg', function () {
    const tests = [
      ['git+https://github.com/ember-cli/ember-rfc176-data.git', 'ember-cli/ember-rfc176-data'],
      ['https://github.com/ember-cli/ember-rfc176-data.git', 'ember-cli/ember-rfc176-data'],
      ['https://github.com/babel/ember-cli-babel', 'babel/ember-cli-babel'],
      ['https://github.com/babel/ember-cli-babel.git', 'babel/ember-cli-babel'],
      ['https://github.host.com/babel/ember-cli-babel.git', 'babel/ember-cli-babel'],
      ['git@github.com:babel/ember-cli-babel.git', 'babel/ember-cli-babel'],
      ['git@github.host.com:babel/ember-cli-babel.git', 'babel/ember-cli-babel'],
      ['https://github.com/emberjs/ember.js.git', 'emberjs/ember.js'],
      ['https://gitlab.com/gnachman/iterm2.git', 'gnachman/iterm2'],
      ['git@gitlab.com:gnachman/iterm2.git', 'gnachman/iterm2'],
    ];

    tests.forEach(([input, output]) => {
      it(`'${input}' -> '${output}'`, function () {
        expect(
          findRepoFromPkg({
            repository: {
              type: 'git',
              url: input,
            },
          }),
        ).toEqual(output);
      });
    });

    it(`works with shorthand 'repository' syntax`, function () {
      expect(
        findRepoFromPkg({
          repository: 'https://github.com/babel/ember-cli-babel',
        }),
      ).toEqual('babel/ember-cli-babel');
    });
  });
});
