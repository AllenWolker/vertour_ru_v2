export const ADD_NEW_GAME = 'ADD_NEW_GAME';
export const DEL_GAME = 'DEL_GAME';

const initialState = {
    gamesOfPlayer: [
        {
            title: 'Riot Games',
            icon: 'assets/ellipse4.png'
        },
        {
            title: 'World of Warcraft',
            icon: 'assets/ellipse41.png'
        }
    ]
};

export function gamesList(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_GAME:
            return { ...state, gamesOfPlayer: action.payload};

        case DEL_GAME:
            return { ...state, gamesOfPlayer: action.payload};

        default:
            return state;
    }
}