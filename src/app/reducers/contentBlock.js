import normalizePhone from '../utils/formControl/normalizePhone';

export const SHOW_NEW_GAMES_BLOCK = 'SHOW_NEW_GAMES_BLOCK';
export const SHOW_DELETE_ACCOUNT_BLOCK = 'SHOW_DELETE_ACCOUNT_BLOCK';
export const SWITCH_ON_FIELD = 'SWITCH_ON_FIELD';
export const ADD_NEW_GAME = 'ADD_NEW_GAME';
export const DEL_GAME = 'DEL_GAME';

const initialState = {
    state: 'Профи',
    team: 'qwerty',
    rating: '3',
    gamerImgPath: 'assets/gamer1.png',
    starIconPath: 'assets/star-icon.png',
    basketIconPath: 'assets/basket-icon.png',
    showNewGamesBlock: false,
    showDeleteAccountBlock: false,
    addText: [
        '+ Добавить игру',
        'Закрыть'
    ],
    formName: 'gamerData',
    formFields: [
        {
            name: 'email',
            label: 'Почта',
            placeholder: 'vertour@gmail.com',
            type: 'email',
            disabled: false,
            normalize: [],
            btnLabel: 'Изменить'
        },

        {
            name: 'phone',
            label: 'Телефон',
            placeholder: '+7 (978) 123 36 69',
            type: 'tel',
            disabled: false,
            normalize: [normalizePhone],
            btnLabel: 'Изменить'
        },

        {
            name: 'password',
            label: 'Пароль',
            placeholder: '*****************',
            type: 'password',
            disabled: false,
            normalize: [],
            btnLabel: 'Изменить'
        },

        {
            name: 'payment',
            label: 'Кошелек Vertour',
            placeholder: '532 руб.',
            type: 'text',
            disabled: false,
            normalize: [],
            btnLabel: 'Способы оплаты'
        }
    ],

    gamesOfPlayer: [
        {
            title: 'Riot Games',
            icon: 'assets/ellipse4.png'
        },
        {
            title: 'World of Warcraft',
            icon: 'assets/ellipse41.png'
        }
    ],

    newGamesList: [
        {
            title: 'League of Legends',
            icon: 'assets/ellipse4-2.png'
        },
        {
            title: 'Dota 2',
            icon: 'assets/ellipse4-3.png'
        },
        {
            title: 'CS : Go',
            icon: 'assets/ellipse4-4.png'
        }
    ]

};


export function contentBlock(state = initialState, action) {
    switch (action.type) {
        case SHOW_NEW_GAMES_BLOCK:
            return { ...state, showNewGamesBlock: action.payload };

        case SHOW_DELETE_ACCOUNT_BLOCK:
            return { ...state, showDeleteAccountBlock: action.payload };

        case SWITCH_ON_FIELD:
            return { ...state, formFields: action.payload};

        case ADD_NEW_GAME:
            return { ...state, gamesOfPlayer: action.payload};

        case DEL_GAME:
            return { ...state, gamesOfPlayer: action.payload};

        default:
            return state;
    }
}