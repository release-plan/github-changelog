import { describe, it, vi } from "vitest";
import { execa } from "execa-latest";
import { expect } from "vitest";

if (!process.env.GITHUB_AUTH) {
  console.warn("Warning: to run all tests you need to provide a GITHUB_AUTH");
}

const todaysDate = new Date().toISOString().split("T")[0];

describe.skipIf(!process.env.GITHUB_AUTH)("command line interface", () => {
  it("can produce a result", async () => {
    const { stdout } =
      await execa`node ./bin/cli.js --from=ee1c697fcf871114c53e9847c43e221d3056f19d --to=b20002d9760e9e212bc623c8f3f42931ddc01bda`;

    expect(stdout).toMatchInlineSnapshot(`
      "
      ## Unreleased (${todaysDate})

      #### :rocket: Enhancement
      * \`github-changelog\`
        * [#33](https://github.com/release-plan/github-changelog/pull/33) support github enterpise url detection and env vars ([@patricklx](https://github.com/patricklx))

      #### Committers: 1
      - Patrick Pircher ([@patricklx](https://github.com/patricklx))


      ## v1.1.0-github-changelog (2025-01-25)

      #### :house: Internal
      * \`github-changelog\`
        * [#29](https://github.com/release-plan/github-changelog/pull/29) Prepare Release ([@github-actions[bot]](https://github.com/apps/github-actions))

      #### Committers: 1
      - GitHub Actions [Bot] ([@github-actions](https://github.com/apps/github-actions))"
    `);
  });

  it("combines things into releases", async () => {
    const { stdout } =
      await execa`node ./bin/cli.js --ignore-releases --from=ee1c697fcf871114c53e9847c43e221d3056f19d --to=b20002d9760e9e212bc623c8f3f42931ddc01bda`;

    expect(stdout).toMatchInlineSnapshot(`
      "
      ## Unreleased (${todaysDate})

      #### :rocket: Enhancement
      * \`github-changelog\`
        * [#33](https://github.com/release-plan/github-changelog/pull/33) support github enterpise url detection and env vars ([@patricklx](https://github.com/patricklx))

      #### :house: Internal
      * \`github-changelog\`
        * [#29](https://github.com/release-plan/github-changelog/pull/29) Prepare Release ([@github-actions[bot]](https://github.com/apps/github-actions))

      #### Committers: 2
      - GitHub Actions [Bot] ([@github-actions](https://github.com/apps/github-actions))
      - Patrick Pircher ([@patricklx](https://github.com/patricklx))"
    `);
  });
});
