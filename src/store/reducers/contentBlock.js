export const SHOW_NEW_GAMES_BLOCK = 'SHOW_NEW_GAMES_BLOCK';
export const SHOW_DELETE_ACCOUNT_BLOCK = 'SHOW_DELETE_ACCOUNT_BLOCK';

const initialState = {
    state: 'Профи',
    team: 'qwerty',
    rating: 3,
    gamerImgPath: 'assets/gamer1.png',
    starIconPath: 'assets/star-icon.png',
    basketIconPath: 'assets/basket-icon.png',
    hookUpNewGamesBlock: false,
    hookUpDeleteAccountBlock: false,
    addText: [
        '+ Добавить игру',
        'Закрыть'
    ]
};


export function contentBlock(state = initialState, action) {
    switch (action.type) {
        case SHOW_NEW_GAMES_BLOCK:
            return { ...state, hookUpNewGamesBlock: action.payload };

        case SHOW_DELETE_ACCOUNT_BLOCK:
            return { ...state, hookUpDeleteAccountBlock: action.payload };

        default:
            return state;
    }
}