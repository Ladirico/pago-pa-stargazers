import axios from 'axios';

interface userAndRepoNamesInterface {
  userName: string;
  repoName: string;
}

export const getUserInfo = (userName: string) => {
  return axios.get(`https://api.github.com/users/${userName}`);
};

export const getAllUserRepos = (userName: string) => {
  return axios.get(`https://api.github.com/users/${userName}/repos`);
};

export const getUserSingleRepo = (props: userAndRepoNamesInterface) => {
  const {userName, repoName} = props;
  return axios.get(`https://api.github.com/repos/${userName}/${repoName}`);
};

export const getStargazers = (props: userAndRepoNamesInterface) => {
  const {userName, repoName} = props;
  return axios.get(
    `https://api.github.com/repos/${userName}/${repoName}/stargazers`,
  );
};
