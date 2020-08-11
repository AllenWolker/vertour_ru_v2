import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './app/store/configureStore';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
