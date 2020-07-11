export const USER_DATA = 'USER_DATA';

const initialState = {
    currentUser: {}
};

export function currentUser(state = initialState, action) {
    switch (action.type) {
        case 'USER_DATA':
            return {...state, currentUser: action.payload};
        default:
            return state;
    }
}