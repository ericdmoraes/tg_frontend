import React from 'react';
import { hot } from 'react-hot-loader/root';

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

function App() {
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

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
