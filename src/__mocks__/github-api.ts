import GithubAPI from '../github-api';

class MockedGithubAPI extends GithubAPI {
  protected getAuthToken() {
    return '123';
  }
}

export default MockedGithubAPI;
