import React from 'react';

import { Redirect, Route } from 'react-router-dom';

import { store } from '../store';

export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
        return <Redirect to="/login" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/" />;
    }

    return <Route {...rest} component={Component} />;
}
