import GithubAPI from "./github-api";
import { describe, it, expect } from "vitest";

describe("github api", function () {
  it("should return correct api endpoint with env var set", function () {
    process.env.GITHUB_AUTH = "test";
    process.env.GITHUB_DOMAIN = "github.host.com";
    // this is also set by GitHub actions
    delete process.env.GITHUB_API_URL;
    let github = new GithubAPI({
      repo: "foo",
      rootPath: ".",
    });
    let fetchedUrl = "";
    github["_fetch"] = async function (url: string) {
      fetchedUrl = url;
    };
    expect(github.getBaseIssueUrl("foo")).toEqual(`https://github.host.com/foo/issues/`);

    github.getUserData({ login: "foo", html_url: "" });
    expect(fetchedUrl).toEqual(`https://api.github.host.com/users/foo`);

    github.getIssueData("foo", "2");
    expect(fetchedUrl).toEqual(`https://api.github.host.com/repos/foo/issues/2`);

    github.getUserData({ login: "Copilot", html_url: "https://github.com/apps/copilot-swe-agent" });
    expect(fetchedUrl).toEqual(`https://api.github.host.com/apps/copilot-swe-agent`);

    delete process.env.GITHUB_DOMAIN;

    process.env.GITHUB_API_URL = "https://api.github.host2.com";

    github = new GithubAPI({
      repo: "foo",
      rootPath: ".",
    });
    github["_fetch"] = async function (url: string) {
      fetchedUrl = url;
    };
    expect(github.getBaseIssueUrl("foo")).toEqual(`https://github.com/foo/issues/`);

    github.getUserData({ login: "foo", html_url: "" });
    expect(fetchedUrl).toEqual(`https://api.github.host2.com/users/foo`);

    github.getIssueData("foo", "2");
    expect(fetchedUrl).toEqual(`https://api.github.host2.com/repos/foo/issues/2`);
  });
});
