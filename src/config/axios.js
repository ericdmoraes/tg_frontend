import axios from 'axios';

export const routes = {
    login: '/api/v1/session',
    signup: '/api/v1/users/create',
};

export const baseUrl = 'http://localhost:3333';

export default axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'content-type': 'application/json',
    },
    maxContentLength: 2000,
});
