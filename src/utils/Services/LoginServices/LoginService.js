import axios, { routes } from '../../../config/axios';

export const makeLogin = async (requestData) => {
    try {
        const { data } = await axios.post(`${routes.login}`, requestData);

        axios.defaults.headers.Authorization = `Bearer ${data.token}`;

        return [data, false];
    } catch (error) {
        return [false, error];
    }
};
