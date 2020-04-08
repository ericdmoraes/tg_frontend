import axios, { routes } from '../../../config/axios';

export const makeRegister = async (userData) => {
    try {
        const { data } = await axios.post(`${routes.register}`, userData);

        return [data, false];
    } catch (error) {
        return [false, error];
    }
};
