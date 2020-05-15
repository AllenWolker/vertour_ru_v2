import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux';


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
import NewsPage from "./components/NewsPage";
import Calendary from './components/Calendar'
import {mainReducer} from "./store/reducers/reducers";
import PaymentMethods from "./components/PaymentMethods";
import WithdrawalOfMoney from "./components/WithdrawalOfMoney";
import AnotherWithdrawalOfMoney from "./components/AnotherWithdrawalOfMoney";


export const ACTION_CHANGE_FIRSTNAME = 'ACTION_CHANGE_FIRSTNAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';
export const ACTION_CHANGE_EMAIL = 'ACTION_CHANGE_EMAIL';
export const ACTION_CHANGE_BEGINSESSION = 'ACTION_CHANGE_BEGINSESSION';
export const ACTION_CHANGE_DATESESSION = 'ACTION_CHANGE_DATESESSION';
export const ACTION_CHANGE_ROWNUMBER = 'ACTION_CHANGE_ROWNUMBER';
export const ACTION_CHANGE_SEATNUMBER = 'ACTION_CHANGE_SEATNUMBER';
export const ACTION_SAVE_HANDLE = 'ACTION_SAVE_HANDLE';

const initialState = {
    login: '',
    email: '',
};
const rootReducer = (state = initialState, action) => {
    return state;
};
const store = createStore(rootReducer);

console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='Routing' style={styles.ContainerLogin}>
                <div className="shadow-box"  style={styles.ShadowBox}>
                    <MenuRoute/>
                    <Route exact path='/' component={App}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/recovery' component={PasswordRecovery}/>
                    <Route path='/new_password' component={NewPassword}/>
                    <Route path='/confirm_recovery_email' component={ConfirmSendRecoveryEmail}/>
                    <Route path='/faq' component={FAQ}/>
                    <Route path='/news' component={NewsPage}/>
                    <Route path='/calendar' component={Calendary}/>
                    <Route path='/payment_methods' component={PaymentMethods}/>
                    <Route path='/withdrawal' component={WithdrawalOfMoney}/>
                    <Route path='/another_withdrawal' component={AnotherWithdrawalOfMoney}/>
                    <Footer/>
                </div>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
