import axios from 'axios';

export const getUser = () => {
  return axios.get(
    'https://api.github.com/repos/fabiobiondi/typescript-playground',
  );
};

export const getAllUserRepos = () => {
  return axios.get('https://api.github.com/users/fabiobiondi/repos');
};

export const getStargazers = () => {
  return axios.get(
    'https://api.github.com/repos/fabiobiondi/typescript-playground/stargazers',
  );
};
