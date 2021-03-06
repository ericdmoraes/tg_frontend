import axios, { routes } from '../../../config/axios';

export const subscribeToSubject = async (student_id, subject_id) => {
  try {
    const { data } = await axios.post(`${routes.subcribe}`, {
      student_id,
      subject_id,
    });

    return [data, false];
  } catch (error) {
    return [false, error];
  }
};

export const getUserSubscriptions = async (student_id) => {
  try {
    const { data } = await axios.post(`${routes.subcribe}/list`, {
      student_id,
    });

    return [data, false];
  } catch (error) {
    return [false, error];
  }
};
