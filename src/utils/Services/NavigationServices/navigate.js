import history from './history';

export default (to, params = null) => {
    return history.push({
        pathname: to,
        state: {
            params,
        },
    });
};
