# Changelog

## Release (2025-09-06)

github-changelog 2.1.2 (patch)

#### :bug: Bug Fix
* `github-changelog`
  * [#58](https://github.com/embroider-build/github-changelog/pull/58) fix issue where nested package structures aren't reported correctly ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))

## Release (2025-08-01)

github-changelog 2.1.1 (patch)

#### :bug: Bug Fix
* `github-changelog`
  * [#54](https://github.com/embroider-build/github-changelog/pull/54) Fix tag and commit detection ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))

## Release (2025-08-01)

github-changelog 2.1.0 (minor)

#### :rocket: Enhancement
* `github-changelog`
  * [#53](https://github.com/embroider-build/github-changelog/pull/53) Add an --ignore-releases option ([@mansona](https://github.com/mansona))

#### :house: Internal
* `github-changelog`
  * [#50](https://github.com/embroider-build/github-changelog/pull/50) use self for release plan ([@patricklx](https://github.com/patricklx))
  * [#47](https://github.com/embroider-build/github-changelog/pull/47) provide a basic acceptance test ([@mansona](https://github.com/mansona))

#### Committers: 2
- Chris Manson ([@mansona](https://github.com/mansona))
- Patrick Pircher ([@patricklx](https://github.com/patricklx))

## Release (2025-03-05)

github-changelog 2.0.0 (major)

#### :boom: Breaking Change
* `github-changelog`
  * [#38](https://github.com/embroider-build/github-changelog/pull/38) drop support for node 16 ([@mansona](https://github.com/mansona))

#### :rocket: Enhancement
* `github-changelog`
  * [#37](https://github.com/embroider-build/github-changelog/pull/37) ignore private packages ([@patricklx](https://github.com/patricklx))
  * [#36](https://github.com/embroider-build/github-changelog/pull/36) add ignore label ([@patricklx](https://github.com/patricklx))

#### :bug: Bug Fix
* `github-changelog`
  * [#44](https://github.com/embroider-build/github-changelog/pull/44) Revert "use github api to find pull request for commit" ([@mansona](https://github.com/mansona))

#### :house: Internal
* `github-changelog`
  * [#35](https://github.com/embroider-build/github-changelog/pull/35) use github api to find pull request for commit ([@patricklx](https://github.com/patricklx))
  * [#25](https://github.com/embroider-build/github-changelog/pull/25) add windows tests ([@mansona](https://github.com/mansona))
  * [#32](https://github.com/embroider-build/github-changelog/pull/32) convert to vitest ([@mansona](https://github.com/mansona))

#### Committers: 2
- Chris Manson ([@mansona](https://github.com/mansona))
- Patrick Pircher ([@patricklx](https://github.com/patricklx))

## Release (2025-02-23)

github-changelog 1.2.0 (minor)

#### :rocket: Enhancement
* `github-changelog`
  * [#33](https://github.com/embroider-build/github-changelog/pull/33) support github enterpise url detection and env vars ([@patricklx](https://github.com/patricklx))

#### Committers: 1
- Patrick Pircher ([@patricklx](https://github.com/patricklx))

## Release (2025-01-25)

github-changelog 1.1.0 (minor)

#### :rocket: Enhancement
* `github-changelog`
  * [#27](https://github.com/embroider-build/github-changelog/pull/27) support enterprise GitHub ([@patricklx](https://github.com/patricklx))

#### :house: Internal
* `github-changelog`
  * [#31](https://github.com/embroider-build/github-changelog/pull/31) remove unused release github action ([@mansona](https://github.com/mansona))
  * [#30](https://github.com/embroider-build/github-changelog/pull/30) update release-plan ([@mansona](https://github.com/mansona))
  * [#28](https://github.com/embroider-build/github-changelog/pull/28) update pnpm version in CI ([@mansona](https://github.com/mansona))

#### Committers: 2
- Chris Manson ([@mansona](https://github.com/mansona))
- Patrick Pircher ([@patricklx](https://github.com/patricklx))

## Release (2024-05-22)

github-changelog 1.0.2 (patch)

#### :bug: Bug Fix
* `github-changelog`
  * [#23](https://github.com/embroider-build/github-changelog/pull/23) only process commits on the current branch ([@mansona](https://github.com/mansona))
  * [#24](https://github.com/embroider-build/github-changelog/pull/24) Fix issue with similarly named packages matching the wrong package in the generated changelog. ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 2
- Chris Manson ([@mansona](https://github.com/mansona))
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2024-05-03)

github-changelog 1.0.1 (patch)

#### :bug: Bug Fix
* `github-changelog`
  * [#22](https://github.com/embroider-build/github-changelog/pull/22) Apply ignoreCommitters config to PR creators ([@nickschot](https://github.com/nickschot))
  * [#19](https://github.com/embroider-build/github-changelog/pull/19) fix npm badge to point at the right package ([@mansona](https://github.com/mansona))

#### Committers: 2
- Chris Manson ([@mansona](https://github.com/mansona))
- Nick Schot ([@nickschot](https://github.com/nickschot))

## Release (2024-03-12)

github-changelog 1.0.0 (major)

#### :boom: Breaking Change
* `github-changelog`
  * [#17](https://github.com/embroider-build/github-changelog/pull/17) swap everything to be github-changelog ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))
## Release (2024-02-16)

@ef4/lerna-changelog 2.2.1 (patch)

#### :bug: Bug Fix
* `@ef4/lerna-changelog`
  * [#14](https://github.com/embroider-build/github-changelog/pull/14) remove invisible character in unlabelled text ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))
## Release (2024-02-16)

@ef4/lerna-changelog 2.2.0 (minor)

#### :rocket: Enhancement
* `@ef4/lerna-changelog`
  * [#11](https://github.com/embroider-build/github-changelog/pull/11) Add a default implementation for unlabelled ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))
## Release (2024-01-11)

@ef4/lerna-changelog 2.1.0 (minor)

#### :rocket: Enhancement
* `@ef4/lerna-changelog`
  * [#8](https://github.com/ef4/lerna-changelog/pull/8) Robustly discover packages for any tool ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### :house: Internal
* `@ef4/lerna-changelog`
  * [#10](https://github.com/ef4/lerna-changelog/pull/10) update release-plan setup ([@mansona](https://github.com/mansona))

#### Committers: 2
- Chris Manson ([@mansona](https://github.com/mansona))
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)
## Release (2023-12-04)

@ef4/lerna-changelog 2.0.0 (major)

#### :boom: Breaking Change
* [#6](https://github.com/ef4/lerna-changelog/pull/6) drop support for node < 16 ([@mansona](https://github.com/mansona))

#### :rocket: Enhancement
* [#1](https://github.com/ef4/lerna-changelog/pull/1) discover all packages in workspaces ([@mansona](https://github.com/mansona))

#### :house: Internal
* [#4](https://github.com/ef4/lerna-changelog/pull/4) Update release-plan workflows ([@mansona](https://github.com/mansona))
* [#3](https://github.com/ef4/lerna-changelog/pull/3) running npm init release-plan-setup ([@mansona](https://github.com/mansona))
* [#2](https://github.com/ef4/lerna-changelog/pull/2) Update changelog and readme badges ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))

## Changes inherited from upstream after reset

#### :boom: Breaking Change
* [#486](https://github.com/lerna/lerna-changelog/pull/486) Drop support for Node.js 10 ([@Turbo87](https://github.com/Turbo87))
* [#198](https://github.com/lerna/lerna-changelog/pull/198) Drop support for Node 8 ([@Turbo87](https://github.com/Turbo87))
* [#160](https://github.com/lerna/lerna-changelog/pull/160) Drop support for Node 6 ([@Turbo87](https://github.com/Turbo87))

#### :rocket: Enhancement
* [#560](https://github.com/lerna/lerna-changelog/pull/560) Update `cli-highlight` to v2.1.11 ([@elwayman02](https://github.com/elwayman02))
* [#495](https://github.com/lerna/lerna-changelog/pull/495) Add support for `--repo` option ([@Turbo87](https://github.com/Turbo87))
* [#492](https://github.com/lerna/lerna-changelog/pull/492) Add `dependabot-preview` to default list of ignored committers ([@Turbo87](https://github.com/Turbo87))
* [#153](https://github.com/lerna/lerna-changelog/pull/153) enhancement: Update string renderer to add empty lines only when commits are present.  ([@shrikanthkr](https://github.com/shrikanthkr))
* [#158](https://github.com/lerna/lerna-changelog/pull/158) Upgrade `yargs` to v13 ([@dcyriller](https://github.com/dcyriller))

#### :bug: Bug Fix
* [#296](https://github.com/lerna/lerna-changelog/pull/296) Omit commiters line when all are filtered out ([@petrch87](https://github.com/petrch87))
* [#398](https://github.com/lerna/lerna-changelog/pull/398) Fix handling of --next-version-from-metadata option ([@contolini](https://github.com/contolini))
* [#259](https://github.com/lerna/lerna-changelog/pull/259) Allow `;` characters in merge commit messages ([@tuchk4](https://github.com/tuchk4))
* [#189](https://github.com/lerna/lerna-changelog/pull/189) Abort process when github response is not OK ([@emmenko](https://github.com/emmenko))

#### :memo: Documentation
* [#472](https://github.com/lerna/lerna-changelog/pull/472) README: Recommend `npx` usage instead of global install ([@Turbo87](https://github.com/Turbo87))

#### Committers
- Jordan Hawker ([@elwayman02](https://github.com/elwayman02))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- Chris Contolini ([@contolini](https://github.com/contolini))
- Petr Chňoupek ([@petrch87](https://github.com/petrch87))
- Valerii Sorokobatko ([@tuchk4](https://github.com/tuchk4))
- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- Nicola Molinari ([@emmenko](https://github.com/emmenko))
- Shrikanth ([@shrikanthkr](https://github.com/shrikanthkr))

## v0.8.3 (2019-11-11)

#### :rocket: Enhancement
* [#142](https://github.com/lerna/lerna-changelog/pull/142) Upgrade `make-fetch-happen` to v5.0.0 ([@trivikr](https://github.com/trivikr))

#### :bug: Bug Fix
* [#155](https://github.com/lerna/lerna-changelog/pull/155) Fix incorrect repo parsing for project names with `.` characters ([@shrikanthkr](https://github.com/shrikanthkr))

#### :house: Internal
* [#151](https://github.com/lerna/lerna-changelog/pull/151) Add dependabot config ([@Turbo87](https://github.com/Turbo87))
* [#149](https://github.com/lerna/lerna-changelog/pull/149) Update locked dependencies ([@trivikr](https://github.com/trivikr))
* [#146](https://github.com/lerna/lerna-changelog/pull/146) Update `jest` to v24.x ([@trivikr](https://github.com/trivikr))
* [#143](https://github.com/lerna/lerna-changelog/pull/143) Upgrade `p-map` to v2.1.0 ([@trivikr](https://github.com/trivikr))
* [#144](https://github.com/lerna/lerna-changelog/pull/144) Remove unused `string.prototype.padend` dependency ([@trivikr](https://github.com/trivikr))
* [#137](https://github.com/lerna/lerna-changelog/pull/137) Update `execa` to v1.0.0 ([@trivikr](https://github.com/trivikr))
* [#139](https://github.com/lerna/lerna-changelog/pull/139) Upgrade `typescript` to v3.6.3 ([@trivikr](https://github.com/trivikr))
* [#127](https://github.com/lerna/lerna-changelog/pull/127) TravisCI: Remove deprecated `sudo: false` option ([@Turbo87](https://github.com/Turbo87))

#### Committers: 3
- Shrikanth ([@shrikanthkr](https://github.com/shrikanthkr))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- Trivikram Kamat ([@trivikr](https://github.com/trivikr))


## v0.8.2 (2018-10-14)

#### :bug: Bug Fix
* [#125](https://github.com/lerna/lerna-changelog/pull/125) Fix `nextVersion` config handling ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#124](https://github.com/lerna/lerna-changelog/pull/124) yarn: Add `integrity` hashes ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v0.8.1 (2018-10-10)

#### :rocket: Enhancement
* [#117](https://github.com/lerna/lerna-changelog/pull/117) Allow "Unreleased" commit group to be renamed ([@alex-pex](https://github.com/alex-pex))

#### :memo: Documentation
* [#120](https://github.com/lerna/lerna-changelog/pull/120) Add monorepo support docs ([@jonaskello](https://github.com/jonaskello))

#### Committers: 2
- Alexandre Paixao ([@alex-pex](https://github.com/alex-pex))
- Jonas Kello ([@jonaskello](https://github.com/jonaskello))


## v0.8.0 (2018-06-19)

#### :boom: Breaking Change
* [#92](https://github.com/lerna/lerna-changelog/pull/92) Declare Node version support (6+). ([@Turbo87](https://github.com/Turbo87))

#### :rocket: Enhancement
* [#115](https://github.com/lerna/lerna-changelog/pull/115) Improve CLI help output ([@Turbo87](https://github.com/Turbo87))
* [#114](https://github.com/lerna/lerna-changelog/pull/114) Add `--from` and `--to` as replacements for `--tag-from/to` ([@Turbo87](https://github.com/Turbo87))
* [#108](https://github.com/lerna/lerna-changelog/pull/108) Improve progress reporting ([@Turbo87](https://github.com/Turbo87))
* [#105](https://github.com/lerna/lerna-changelog/pull/105) Ignore dependency update bots by default ([@Turbo87](https://github.com/Turbo87))
* [#103](https://github.com/lerna/lerna-changelog/pull/103) Use `cli-highlight` to syntax highlight markdown output. ([@Turbo87](https://github.com/Turbo87))
* [#102](https://github.com/lerna/lerna-changelog/pull/102) Improve automatic config detection. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#116](https://github.com/lerna/lerna-changelog/pull/116) Fix progress bar rendering for `--no-color` ([@Turbo87](https://github.com/Turbo87))
* [#107](https://github.com/lerna/lerna-changelog/pull/107) Fix `refName` parsing ([@Turbo87](https://github.com/Turbo87))
* [#106](https://github.com/lerna/lerna-changelog/pull/106) Remove trailing period enforcement from PR titles ([@Turbo87](https://github.com/Turbo87))
* [#104](https://github.com/lerna/lerna-changelog/pull/104) Add `@` sign in front of contributor login ([@Turbo87](https://github.com/Turbo87))

#### :memo: Documentation
* [#113](https://github.com/lerna/lerna-changelog/pull/113) Update Documentation ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#111](https://github.com/lerna/lerna-changelog/pull/111) Update `progress` to v2.0.0 ([@Turbo87](https://github.com/Turbo87))
* [#112](https://github.com/lerna/lerna-changelog/pull/112) Update `rimraf` to v2.6.2 ([@Turbo87](https://github.com/Turbo87))
* [#110](https://github.com/lerna/lerna-changelog/pull/110) Update `p-map` to v1.2.0 ([@Turbo87](https://github.com/Turbo87))
* [#109](https://github.com/lerna/lerna-changelog/pull/109) Update `yargs` to v11.0.0 ([@Turbo87](https://github.com/Turbo87))
* [#101](https://github.com/lerna/lerna-changelog/pull/101) CI: Remove `node_modules` from cache. ([@Turbo87](https://github.com/Turbo87))
* [#100](https://github.com/lerna/lerna-changelog/pull/100) package.json: Adjust changelog labels. ([@Turbo87](https://github.com/Turbo87))
* [#99](https://github.com/lerna/lerna-changelog/pull/99) Use `prettier` to format code. ([@Turbo87](https://github.com/Turbo87))
* [#98](https://github.com/lerna/lerna-changelog/pull/98) Use `jest-runner-tslint` for linting. ([@Turbo87](https://github.com/Turbo87))
* [#97](https://github.com/lerna/lerna-changelog/pull/97) Update `make-fetch-happen` to v4.0.1. ([@Turbo87](https://github.com/Turbo87))
* [#96](https://github.com/lerna/lerna-changelog/pull/96) Update `fs-extra` to v6.0.1. ([@Turbo87](https://github.com/Turbo87))
* [#95](https://github.com/lerna/lerna-changelog/pull/95) Update `chalk` to v2.4.1. ([@Turbo87](https://github.com/Turbo87))
* [#94](https://github.com/lerna/lerna-changelog/pull/94) Update to Jest 23. ([@Turbo87](https://github.com/Turbo87))
* [#93](https://github.com/lerna/lerna-changelog/pull/93) Update `execa` to v0.10.0. ([@Turbo87](https://github.com/Turbo87))
* [#91](https://github.com/lerna/lerna-changelog/pull/91) Update TSLint and fix issues. ([@Turbo87](https://github.com/Turbo87))
* [#90](https://github.com/lerna/lerna-changelog/pull/90) Update `typescript` to v2.9.2. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.7.0 (2017-10-22)

#### :rocket: Enhancement
* [#81](https://github.com/lerna/lerna-changelog/pull/81) Add support for nested/scoped packages. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#82](https://github.com/lerna/lerna-changelog/pull/82) changelog: Handle missing issues/PRs gracefully. ([@Turbo87](https://github.com/Turbo87))
* [#73](https://github.com/lerna/lerna-changelog/pull/73) Use HTTP-based caching. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#80](https://github.com/lerna/lerna-changelog/pull/80) GitHubAPI class refactorings. ([@Turbo87](https://github.com/Turbo87))
* [#72](https://github.com/lerna/lerna-changelog/pull/72) Convert "cli" script to TypeScript and wrap in a run() function. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))

## v0.6.0 (2017-07-11)

- Don't have to specify "repo" in the config
- Have a set of default labels

#### :rocket: Enhancement
* [#71](https://github.com/lerna/lerna-changelog/pull/71) configuration: Derive repo from package.json and use default labels. ([@Turbo87](https://github.com/Turbo87))
* [#60](https://github.com/lerna/lerna-changelog/pull/60) Add support for homu merge commits. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#70](https://github.com/lerna/lerna-changelog/pull/70) configuration-error: Add missing "message" property. ([@Turbo87](https://github.com/Turbo87))
* [#64](https://github.com/lerna/lerna-changelog/pull/64) progressBar: Split tick() into setTitle() and tick(). ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#67](https://github.com/lerna/lerna-changelog/pull/67) Change git functions to be async using "execa". ([@Turbo87](https://github.com/Turbo87))
* [#66](https://github.com/lerna/lerna-changelog/pull/66) MarkdownRenderer cleanup. ([@Turbo87](https://github.com/Turbo87))
* [#65](https://github.com/lerna/lerna-changelog/pull/65) Extract "MarkdownRenderer" class. ([@Turbo87](https://github.com/Turbo87))
* [#61](https://github.com/lerna/lerna-changelog/pull/61) Refactorings and code simplification (part 2). ([@Turbo87](https://github.com/Turbo87))
* [#59](https://github.com/lerna/lerna-changelog/pull/59) Refactorings and code simplification. ([@Turbo87](https://github.com/Turbo87))
* [#54](https://github.com/lerna/lerna-changelog/pull/54) Convert to TypeScript. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))

## v0.5.0 (2017-05-31)

- Make lerna-changelog work better for a regular repo (including this one)

#### :rocket: Enhancement
* [#51](https://github.com/lerna/lerna-changelog/pull/51) Use async/await to request commit infos concurrently. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#53](https://github.com/lerna/lerna-changelog/pull/53) Skip package heading for single package repos. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#49](https://github.com/lerna/lerna-changelog/pull/49) Exclude arrow functions, classes and generator functions from being transpiled. ([@Turbo87](https://github.com/Turbo87))
* [#50](https://github.com/lerna/lerna-changelog/pull/50) Update "jest" to v20.0.4. ([@Turbo87](https://github.com/Turbo87))
* [#48](https://github.com/lerna/lerna-changelog/pull/48) Adjust "lint" script. ([@Turbo87](https://github.com/Turbo87))
* [#47](https://github.com/lerna/lerna-changelog/pull/47) Move configuration from "lerna.json" into "package.json". ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))

## v0.4.0 (2017-03-24)

Notable changes:

- We dropped Node 0.10/0.12
- Adds support for the "changelog" config key from "package.json" instead of from "lerna.json"
- Removes "lerna" peerDep

> Basically removes ties to lerna so can be used standalone.

#### :boom: Breaking Change
* Other
  * [#37](https://github.com/lerna/lerna-changelog/pull/37) Babel: Use "preset-env" instead of "preset-es2015". ([@Turbo87](https://github.com/Turbo87))

#### :rocket: Enhancement
* Other
  * [#42](https://github.com/lerna/lerna-changelog/pull/42) Read "changelog" config key from "package.json" too. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* Other
  * [#41](https://github.com/lerna/lerna-changelog/pull/41) Remove "lerna" peer dependency. ([@Turbo87](https://github.com/Turbo87))
  * [#39](https://github.com/lerna/lerna-changelog/pull/39) Update .gitignore file. ([@Turbo87](https://github.com/Turbo87))
  * [#40](https://github.com/lerna/lerna-changelog/pull/40) package.json: Sort keys according to documentation. ([@Turbo87](https://github.com/Turbo87))
  * [#38](https://github.com/lerna/lerna-changelog/pull/38) Apply ESLint to "test" folder too. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))

## v0.3.0 (2017-01-29)

#### :rocket: Enhancement
* [#31](https://github.com/lerna/lerna-changelog/pull/31) New CLI options, custom tags range and tests.. ([@emmenko](https://github.com/emmenko))

#### :house: Internal
* [#33](https://github.com/lerna/lerna-changelog/pull/33) add yarn.lock. ([@hzoo](https://github.com/hzoo))
* [#32](https://github.com/lerna/lerna-changelog/pull/32) Add changelog file, move cli to /bin. ([@hzoo](https://github.com/hzoo))

#### Committers: 2
- Henry Zhu ([hzoo](https://github.com/hzoo))
- Nicola Molinari ([emmenko](https://github.com/emmenko))

## v0.2.3 (2016-11-27)

#### :bug: Bug Fix
* Other
  * [#28](https://github.com/lerna/lerna-changelog/pull/28) Convert label name to lowercase before matching. ([@fson](https://github.com/fson))

#### Committers: 1
- Ville Immonen ([fson](https://github.com/fson))

## v0.2.2 (2016-10-24)

#### :bug: Bug Fix
* [#27](https://github.com/lerna/lerna-changelog/pull/27) match other closes keywords for github - Closes [#7](https://github.com/lerna/lerna-changelog/issues/7). ([@hzoo](https://github.com/hzoo))

#### Committers: 1
- Henry Zhu ([hzoo](https://github.com/hzoo))

## v0.2.1 (2016-07-29)

#### :bug: Bug Fix
* [#24](https://github.com/lerna/lerna-changelog/pull/24) If there is no name, just print the username. ([@hzoo](https://github.com/hzoo))

#### Committers: 1
- Henry Zhu ([hzoo](https://github.com/hzoo))

## v0.2.0 (2016-06-17)

#### :rocket: Enhancement
* [#18](https://github.com/lerna/lerna-changelog/pull/18) Consolidate changes by affected packages. ([@gigabo](https://github.com/gigabo))

#### :bug: Bug Fix
* [#13](https://github.com/lerna/lerna-changelog/pull/13) Remove the `--first-parent` option from log list generation. ([@gigabo](https://github.com/gigabo))
* [#20](https://github.com/lerna/lerna-changelog/pull/20) Nicer error message on missing config. ([@gigabo](https://github.com/gigabo))
* [#14](https://github.com/lerna/lerna-changelog/pull/14) Update repository URLs in package.json. ([@gigabo](https://github.com/gigabo))

#### Committers: 1
- Bo Borgerson ([gigabo](https://github.com/gigabo))
