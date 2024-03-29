import axios, { routes } from '../../../config/axios';

export const makeRegister = async (userData) => {
  try {
    const res = await axios.post(`${routes.register}`, userData);
    return [res, false];
  } catch ({ response: { data } }) {
    // console.log('oi', data);
    return [false, data];
  }
};
