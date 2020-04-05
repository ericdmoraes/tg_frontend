import { createStore, applyMiddleware, compose } from 'redux';

export default (reducers, middlewares) => {
    return createStore(
        reducers,
        compose(
            applyMiddleware(...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
};
