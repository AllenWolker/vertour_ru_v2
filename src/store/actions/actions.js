import React from "react";
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

export const setFirstName = (newFirstName) => {
    console.log(newFirstName);
    return {
        type: ACTION_CHANGE_FIRSTNAME,
        payload: newFirstName
    }
};
export const setSecondName = (newSecondName) => {
    return {
        type: ACTION_CHANGE_SECOND_NAME,
        payload: newSecondName
    }
};

export const setEmail = (newEmail) => {
    console.log(newEmail);
    return {
        type: ACTION_CHANGE_EMAIL,
        payload: newEmail
    }
};

export const setBeginSession = (newBeginsession) => {
    console.log(newBeginsession);
    return {
        type: ACTION_CHANGE_BEGINSESSION,
        payload: newBeginsession
    }
};

export const setDateSession = (newDateSession) => {
    console.log(newDateSession);
    return {
        type: ACTION_CHANGE_DATESESSION,
        payload: newDateSession
    }
};

export const setRowNumber = (newRowNumber) => {
    console.log(newRowNumber);
    return {
        type: ACTION_CHANGE_ROWNUMBER,
        payload: newRowNumber
    }
};

export const setSeatNumber = (newSeatNumber) => {
    console.log(newSeatNumber);
    return {
        type: ACTION_CHANGE_SEATNUMBER,
        payload: newSeatNumber

    }
};
export const setHandleChange = (newHandle) => {
    console.log(newHandle);
    return {
        type: ACTION_SAVE_HANDLE,
        payload: newHandle

    }
};
