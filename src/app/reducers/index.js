import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as formReducer } from 'redux-form';
import { headerMenu } from './headerMenu';
import { aside } from './aside';
import { contentBlock } from './contentBlock';
import { personalData } from './personalData';
import { gamesList } from './gamesList';
import { newGamesList } from "./newGamesList";

export default history =>
    combineReducers({
        router: connectRouter(history),
        form: formReducer,
        headerMenu: headerMenu,
        aside: aside,
        contentBlock: contentBlock,
        personalData: personalData,
        gamesList: gamesList,
        newGamesList: newGamesList,
    });