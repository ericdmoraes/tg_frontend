import { takeLatest, call, put, all } from 'redux-saga/effects';

// Actions
import ACTION_TYPES from './actionTypes';
import { signInSuccess } from './actions';

import { makeLogin } from '../../../utils/Services/LoginServices/LoginService';

import history from '../../../utils/Services/NavigationServices/history';

export function* signIn({ payload }) {
    const { email, password } = payload;

    const [res, resErr] = yield call(makeLogin, { email, password });

    if (!resErr) {
        const { user, token } = res;
        yield put(signInSuccess(token, user));
        history.push('/');
    }
}

export default all([takeLatest(ACTION_TYPES.signinRequest, signIn)]);
