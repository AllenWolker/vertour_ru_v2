

import React from "react";

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
