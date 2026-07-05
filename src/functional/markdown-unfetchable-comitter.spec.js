import { vi, describe, beforeEach, afterEach, it, expect } from 'vitest';

import * as git from '../git';
import Changelog from '../changelog';
import * as fetch from '../fetch';

vi.mock('../../src/progress-bar');
vi.mock('../changelog');
vi.mock('../../src/github-api');
vi.mock('../git');
vi.mock('../fetch');

describe('createMarkdown with an unfetchable committer', () => {
  beforeEach(() => {
    fetch.__resetMockResponses();

    git.changedPaths.mockImplementation(() => []);
    git.lastTag.mockImplementation(() => 'v1.0.0');
    git.listTagNames.mockImplementation(() => ['v1.0.0']);
    git.listCommits.mockImplementation(() => [
      {
        sha: 'a0000002',
        refName: '',
        summary: 'Merge pull request #2 from bump-deps',
        date: '2024-01-02',
      },
      {
        sha: 'a0000001',
        refName: '',
        summary: 'Merge pull request #1 from feature',
        date: '2024-01-01',
      },
    ]);

    fetch.__setMockResponses({
      'https://api.github.com/repos/embroider-build/github-changelog/issues/1': {
        body: {
          number: 1,
          title: 'feat: add new feature',
          labels: [{ name: 'New Feature' }],
          pull_request: { html_url: 'https://github.com/embroider-build/github-changelog/pull/1' },
          user: { login: 'real-user', html_url: 'https://github.com/real-user' },
        },
      },
      'https://api.github.com/repos/embroider-build/github-changelog/issues/2': {
        body: {
          number: 2,
          title: 'chore: bump dependencies',
          labels: [{ name: 'Type: Maintenance' }],
          pull_request: { html_url: 'https://github.com/embroider-build/github-changelog/pull/2' },
          user: { login: 'dependabot[bot]', html_url: 'https://github.com/apps/dependabot' },
        },
      },
      'https://api.github.com/users/real-user': {
        body: { login: 'real-user', type: 'User', html_url: 'https://github.com/real-user', name: 'Real User' },
      },
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('still generates a readable changelog when a bot committer is unfetchable', async () => {
    const changelog = new Changelog({ ignoreCommitters: [] });

    const markdown = await changelog.createMarkdown();

    expect(markdown).toMatchSnapshot();
  });
});
