import { takeLatest, call, put, all } from 'redux-saga/effects';

// Actions
import ACTION_TYPES from './actionTypes';
import { signInSuccess, signFailure } from './actions';

import { makeLogin } from '../../../utils/Services/LoginServices/LoginService';

import navigateTo from '../../../utils/Services/NavigationServices/navigate';

export function* signIn({ payload }) {
    const { email, password } = payload;

    const [res, resErr] = yield call(makeLogin, { email, password });

    if (res) {
        console.log('oi');
        const { user, token } = res;
        yield put(signInSuccess(token, user));
        navigateTo('/');
    } else if (resErr) {
        console.log('oi 2');
        yield put(signFailure(true));
    }
}

export function signOut() {
    navigateTo('/login');
}

export default all([
    takeLatest(ACTION_TYPES.signinRequest, signIn),
    takeLatest(ACTION_TYPES.signOut, signOut),
]);
