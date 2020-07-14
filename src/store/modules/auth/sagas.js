import { takeLatest, call, put, all } from 'redux-saga/effects';

import axios from '../../../config/axios';

// Actions
import ACTION_TYPES from './actionTypes';
import { signInSuccess, signFailure } from './actions';

import { makeLogin } from '../../../utils/Services/LoginServices/LoginService';

import navigateTo from '../../../utils/Services/NavigationServices/navigate';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const [res, resErr] = yield call(makeLogin, { email, password });

  if (res) {
    const { user, token } = res;
    yield put(signInSuccess(token, user));
    navigateTo('/');
  } else if (resErr) {
    yield put(signFailure(true));
  }
}

export function signOut() {
  navigateTo('/login');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(ACTION_TYPES.signinRequest, signIn),
  takeLatest(ACTION_TYPES.signOut, signOut),
]);
