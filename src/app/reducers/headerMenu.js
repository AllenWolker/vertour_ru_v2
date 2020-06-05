const initialState = {
    headerMenuPoints: [
        'Главная',
        'PRO',
        'Новости',
        'Поддержка'
    ],

    user: [
        'Creative Tim',
        'bot123'
    ],

    headerLogoPath: 'assets/vertour-logo.png',

    userIconPath: 'assets/user-logo.png'
};


export function headerMenu(state = initialState) {
    return state;
}