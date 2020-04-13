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

// export const createSubject = async (name, description) => {
//     try {
//         const { data } = await axios.post(routes.subjects, {
//             name,
//             description,
//         });

//         return [data, false];
//     } catch (error) {
//         return [false, error];
//     }
// };
