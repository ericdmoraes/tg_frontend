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

export const createQuestions = async (test_id, topic_id, questions) => {
    try {
        const { data } = await axios.post(`${routes.questions}`, {
            test_id,
            topic_id,
            questions: questions,
        });

        return [data, false];
    } catch (error) {
        return [false, error];
    }
};
