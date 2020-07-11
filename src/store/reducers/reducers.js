
import {
    ACTION_CHANGE_FIRSTNAME,
    ACTION_CHANGE_SECOND_NAME,
    ACTION_CHANGE_EMAIL,
    ACTION_CHANGE_BEGINSESSION,
    ACTION_CHANGE_DATESESSION,
    ACTION_CHANGE_ROWNUMBER,
    ACTION_CHANGE_SEATNUMBER,
    ACTION_SAVE_HANDLE,
} from '../../index'
const initialState = {
    login: '',
    email: '',
};

export const mainReducer = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case ACTION_CHANGE_FIRSTNAME:
            return {...state, firstName: action.payload};

        case ACTION_CHANGE_SECOND_NAME:
            return {...state, secondName: action.payload};

        case ACTION_CHANGE_EMAIL:
            return {...state, email: action.payload};

        case ACTION_CHANGE_BEGINSESSION:
            return {...state, beginSession: action.payload};

        case ACTION_CHANGE_DATESESSION:
            return {...state, dateSession: action.payload};

        case ACTION_CHANGE_ROWNUMBER:
            return {...state, rowNumber: action.payload};

        case ACTION_CHANGE_SEATNUMBER:
            return {...state, seatNumber: action.payload};

        case ACTION_SAVE_HANDLE:
            return {...state, saveHandle: action.payload};
        default:
            return state;
    }

};

