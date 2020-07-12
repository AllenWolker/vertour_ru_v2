import { USER_DATA } from '../reducers/currentUser';

export const userData = userObj => {
    return {
        type: USER_DATA,
        payload: userObj
    }
};