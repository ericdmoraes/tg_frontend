/* eslint-disable no-param-reassign */
import produce from 'immer';
import ACTION_TYPES from './actionTypes';

const initialState = {
  token: null,
  signed: false,
  loading: false,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.signInSuccess:
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    case ACTION_TYPES.signOut:
      return produce(state, (draft) => {
        draft.token = null;
        draft.signed = false;
      });
    case ACTION_TYPES.signFailure:
      return produce(state, (draft) => {
        draft.error = action.payload.status;
      });
    default:
      return state;
  }
}
