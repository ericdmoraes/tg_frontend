import axios, { routes } from '../../../config/axios';

export const getTests = async (reqData) => {
    try {
        const { data } = await axios.post(`${routes.tests}/list`, {
            condition: {
                subject_id: reqData,
            },
        });

        return [data, false];
    } catch (error) {
        return [false, error];
    }
};

export const createTest = async (name, questions_quantity, subject_id) => {
    try {
        const { data } = await axios.post(routes.tests, {
            name,
            questions_quantity,
            subject_id,
        });

        return [data, false];
    } catch (error) {
        return [false, error];
    }
};
