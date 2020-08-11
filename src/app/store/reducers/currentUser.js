export const USER_DATA = 'USER_DATA';

const initialState = {
    userData: {}
};

export function currentUser(state = initialState, action) {
    switch (action.type) {
        case USER_DATA:
            return {...state, userData: action.payload};

        default:
            return state;
    }
}