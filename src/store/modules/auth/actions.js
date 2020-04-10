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

export function signFailure(status) {
    return {
        type: ACTION_TYPES.signFailure,
        payload: {
            status,
        },
    };
}

export function signOut() {
    return {
        type: ACTION_TYPES.signOut,
    };
}
