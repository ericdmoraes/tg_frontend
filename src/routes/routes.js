import React from 'react';

import { Redirect, Route } from 'react-router-dom';

import { store } from '../store';

// Layout
import DefaultLayout from '../_Components/_layout/Default';
import AuthLayout from '../_Components/_layout/Auth';

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

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                );
            }}
        />
    );
}
