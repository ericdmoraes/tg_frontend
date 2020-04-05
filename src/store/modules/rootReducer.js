import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

const reducers = {
    auth,
    user,
};

export default combineReducers(reducers);
