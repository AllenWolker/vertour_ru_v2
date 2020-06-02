import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as formReducer } from 'redux-form';
import { headerMenu } from './headerMenu';
import { aside } from './aside';
import { contentBlock } from './contentBlock';

export default history =>
    combineReducers({
        router: connectRouter(history),
        form: formReducer,
        headerMenu: headerMenu,
        aside: aside,
        contentBlock: contentBlock
    });