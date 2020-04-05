import produce from 'immer';
import ACTION_TYPES from './actionTypes';

const initialState = {
    profile: null,
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.signInSuccess:
            return produce(state, (draft) => {
                draft.profile = action.payload.user;
            });
        default:
            return state;
    }
}
