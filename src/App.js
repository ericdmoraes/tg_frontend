import React from 'react';

// Router
import { Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Store
import { store, persistor } from './store';

// Navigator
import history from './utils/Services/NavigationServices/history';

// Routes
import Routes from './routes';

// Styles
import GlobalStyles from './styles/global';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <GlobalStyles />
                    <Routes />
                </Router>
            </PersistGate>
        </Provider>
    );
}
