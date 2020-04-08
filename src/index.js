import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MenuRoute from "./components/MenuRoute";
import Footer from "./components/Footer";
import Login from './components/Login';
import styles from './styles'
import PasswordRecovery from "./components/PasswordRecovery";
import NewPassword from "./components/NewPassword";
import ConfirmSendRecoveryEmail from "./components/ConfirmSendRecoveryEmail";
import FAQ from "./components/FAQ";

ReactDOM.render(
    <Router>
        <div className='Routing' style={styles.ContainerLogin}>
            <MenuRoute/>
            <Route exact path='/' component={App}/>
            <Route path='/login' component={Login}/>
            <Route path='/recovery' component={PasswordRecovery}/>
            <Route path='/new_password' component={NewPassword}/>
            <Route path='/confirm_recovery_email' component={ConfirmSendRecoveryEmail}/>
            <Route path='/faq' component={FAQ}/>
            <Footer/>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
