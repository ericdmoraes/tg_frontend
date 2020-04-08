import React from 'react';

// Router
import { Switch } from 'react-router-dom';
import Route from './routes';

// Components
import LoginScreen from '../pages/Login/Login';
import MainScreen from '../pages/Main/Main';
import SignUpScreen from '../pages/SignUp/SignUp';

export default function Routes() {
    return (
        <Switch>
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={SignUpScreen} />
            <Route path="/" component={MainScreen} isPrivate />
        </Switch>
    );
}
