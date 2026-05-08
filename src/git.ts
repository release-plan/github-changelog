import { x, xSync } from "tinyexec";

export function getRootPath() {
  const cwd = process.cwd();

  return xSync('git', ['rev-parse', '--show-toplevel'], { nodeOptions: { cwd }}).stdout.trim();
}

export async function changedPaths(sha: string): Promise<string[]> {
  const result = await x('git', ['show', '-m', '--name-only', '--pretty=format:', '--first-parent', sha]);
  return result.stdout.trim().split('\n');
}

/**
 * All existing tags in the repository
 */
export function listTagNames(): string[] {
  return xSync('git', ['tag']).stdout.trim().split('\n').filter(Boolean);
}

/**
 * The latest reachable tag starting from HEAD
 */
export function lastTag(): string {
  return xSync('git', ['describe', '--abbrev=0', '--tags', '--first-parent']).stdout.trim();
}

export interface CommitListItem {
  sha: string;
  refName: string;
  summary: string;
  date: string;
}

export function parseLogMessage(commit: string): CommitListItem | null {
  const parts = commit.match(/hash<(.+)> ref<(.*)> message<(.*)> date<(.*)>/) || [];

  if (!parts || parts.length === 0) {
    return null;
  }

  return {
    sha: parts[1],
    refName: parts[2],
    summary: parts[3],
    date: parts[4],
  };
}

export function listCommits(from: string, to: string = ''): CommitListItem[] {
  // Prints "hash<short-hash> ref<ref-name> message<summary> date<date>"
  // This format is used in `getCommitInfos` for easily analize the commit.
  return xSync('git', [
      'log',
      '--oneline',
      '--pretty=hash<%h> ref<%D> message<%s> date<%cd>',
      '--date=short',
      `${from}..${to}`,
    ])
    .stdout
    .trim()
    .split('\n')
    .filter(Boolean)
    .map(parseLogMessage)
    .filter(Boolean) as CommitListItem[];
}
