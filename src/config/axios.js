import axios from 'axios';

export const routes = {
  login: '/api/v1/session',
  register: '/api/v1/users/create',
  subjects: '/api/v1/subject',
  tests: '/api/v1/test',
  questions: '/api/v1/question',
  subcribe: '/api/v1/subscribe',
};

export const baseUrl = process.env.REACT_APP_URLAPI;

export default axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  },
  maxContentLength: 2000,
});
