import ACTION_TYPES from './actionTypes';

export function signInRequest(email, password) {
    return {
        type: ACTION_TYPES.signinRequest,
        payload: {
            email,
            password,
        },
    };
}

export function signInSuccess(token, user) {
    return {
        type: ACTION_TYPES.signInSuccess,
        payload: {
            token,
            user,
        },
    };
}

export function signFailure() {
    return {
        type: ACTION_TYPES.signFailure,
    };
}
