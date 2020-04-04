import React from 'react';

// Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import LoginScreen from './pages/Login/Login';
import MainScreen from './pages/Main/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginScreen} />
                <Route path="/" exact component={MainScreen} />
            </Switch>
        </BrowserRouter>
    );
}
