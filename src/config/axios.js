import axios from 'axios';

export const routes = {
    login: '/api/v1/session',
    signup: '/api/v1/users/create',
    register: '/api/v1/users/create',
};

export const baseUrl = process.env.REACT_APP_API_URL;

export default axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'content-type': 'application/json',
    },
    maxContentLength: 2000,
});
