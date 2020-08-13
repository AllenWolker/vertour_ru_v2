import {
    AUTH_SUCCESS,
    AUTH_FAILURE
} from '../reducers/authorize';

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        payload: token
    }
}

export function authFailure(message) {
    localStorage.removeItem('token');
    return {
        type: AUTH_FAILURE,
        payload: message
    }
}