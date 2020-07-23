import {
    ADD_NEW_GAME,
    DEL_GAME
} from '../reducers/gamesList'

export function addNewGame(list) {
    return {
        type: ADD_NEW_GAME,
        payload: list
    }
}

export function delGame(list) {
    return {
        type:  DEL_GAME,
        payload: list
    }
}