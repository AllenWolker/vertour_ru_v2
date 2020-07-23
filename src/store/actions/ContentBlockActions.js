import {
    SHOW_NEW_GAMES_BLOCK,
    SHOW_DELETE_ACCOUNT_BLOCK
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