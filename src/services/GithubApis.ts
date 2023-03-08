import axios from 'axios';
import {responseAllUserReposInterface} from './Interfaces/ResponseAllUserReposInterface';
import {responseStargazersInterfaces} from './Interfaces/ResponseStargazersInterfaces';
import {responseUserAndRepoInfoInterfaces} from './Interfaces/ResponseUserAndRepoInfoInterfaces';
import {responseUserInfoInterface} from './Interfaces/ResponseUserInfoInterface';

export const getUserInfo = (userName: string) => {
  return axios.get<responseUserInfoInterface>(
    `https://api.github.com/users/${userName}`,
  );
};

export const getAllUserRepos = (userName: string) => {
  return axios.get<responseAllUserReposInterface[]>(
    `https://api.github.com/users/${userName}/repos`,
  );
};

export const getUserSingleRepo = (userName: string, repoName: string) => {
  return axios.get<responseUserAndRepoInfoInterfaces>(
    `https://api.github.com/repos/${userName}/${repoName}`,
  );
};

export const getStargazers = (userName: string, repoName: string) => {
  return axios.get<responseStargazersInterfaces[]>(
    `https://api.github.com/repos/${userName}/${repoName}/stargazers`,
  );
};
