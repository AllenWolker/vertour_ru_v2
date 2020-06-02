import {
    SHOW_NEW_GAMES_BLOCK,
    SHOW_DELETE_ACCOUNT_BLOCK,
    ADD_NEW_GAME,
    DEL_GAME
} from '../reducers/contentBlock';

export function showNewGamesBlock(show) {
    return {
        type: SHOW_NEW_GAMES_BLOCK,
        payload: show
    }
}

export function showDeleteAccountBlock(show) {
    return {
        type: SHOW_DELETE_ACCOUNT_BLOCK,
        payload: show
    }
}

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