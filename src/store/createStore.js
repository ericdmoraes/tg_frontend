import { createStore, applyMiddleware, compose } from 'redux';

export default (reducers, middlewares) => {
    const dev =
        process.env.NODE_ENV === 'development'
            ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__()
            : null;

    return createStore(reducers, compose(applyMiddleware(...middlewares)));
};
