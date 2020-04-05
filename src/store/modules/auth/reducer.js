import produce from 'immer';
import ACTION_TYPES from './actionTypes';

const initialState = {
    token: null,
    signed: false,
    loading: false,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.signInSuccess:
            return produce(state, (draft) => {
                draft.token = action.payload.token;
                draft.signed = true;
            });
        default:
            return state;
    }
}
