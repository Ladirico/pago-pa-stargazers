import axios from 'axios';
import {ResponseAllUserReposInterface} from './responseInterfaces/ResponseAllUserReposInterface';
import {ResponseStargazersInterfaces} from './responseInterfaces/ResponseStargazersInterfaces';
import {ResponseUserInfoInterface} from './responseInterfaces/ResponseUserInfoInterface';

export const getUserInfo = (userName: string) => {
  return axios.get<ResponseUserInfoInterface>(
    `https://api.github.com/users/${userName}`,
  );
};

export const getAllUserRepos = (userName: string) => {
  return axios.get<ResponseAllUserReposInterface[]>(
    `https://api.github.com/users/${userName}/repos`,
  );
};

export const getStargazers = (userName: string, repoName: string) => {
  return axios.get<ResponseStargazersInterfaces[]>(
    `https://api.github.com/repos/${userName}/${repoName}/stargazers`,
  );
};
