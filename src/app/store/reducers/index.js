import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { contentBlock } from './contentBlock';
import { personalData } from './personalData';
import { gamesList } from './gamesList';
import { newGamesList } from "./newGamesList";
import { currentUser } from './currentUser';
import { authorize } from './authorize';

export default history =>
    combineReducers({
            router: connectRouter(history),
            form: formReducer,
            contentBlock: contentBlock,
            personalData: personalData,
            gamesList: gamesList,
            newGamesList: newGamesList,
            authorize: authorize,
            currentUser: currentUser,
    });