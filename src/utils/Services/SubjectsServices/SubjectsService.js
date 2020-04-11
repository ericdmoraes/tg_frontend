import axios, { routes } from '../../../config/axios';

export const getSubjects = async (requestData) => {
    try {
        const { data } = await axios.post(`${routes.subjects}/list`, {
            condition: {
                user_id: requestData,
            },
        });

        return [data, false];
    } catch (error) {
        return [false, error];
    }
};
