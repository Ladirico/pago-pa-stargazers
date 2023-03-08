import axios from 'axios';
import {responseAllUserReposInterface} from './responseInterfaces/ResponseAllUserReposInterface';
import {responseStargazersInterfaces} from './responseInterfaces/ResponseStargazersInterfaces';
import {responseUserInfoInterface} from './responseInterfaces/ResponseUserInfoInterface';

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

export const getStargazers = (userName: string, repoName: string) => {
  return axios.get<responseStargazersInterfaces[]>(
    `https://api.github.com/repos/${userName}/${repoName}/stargazers`,
  );
};
