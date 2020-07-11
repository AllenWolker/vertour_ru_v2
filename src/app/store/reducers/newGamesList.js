const initialState = {
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

export function newGamesList(state = initialState) {
    return state;
}