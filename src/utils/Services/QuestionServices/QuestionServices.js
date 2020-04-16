import axios, { routes } from '../../../config/axios';

export const getQuestions = async (id) => {
    try {
        const { data } = await axios.post(`${routes.questions}/list`, {
            test_id: id,
        });

        return [data, false];
    } catch (error) {
        return [false, error];
    }
};
