import React, { Component } from 'react';
import './App.css';
import styles from "./styles";
import {Route, Redirect, Switch} from 'react-router-dom';
import styled from 'styled-components';

import Login from "./pages/Login";
import PasswordRecovery from "./pages/PasswordRecovery";
import NewPassword from "./pages/NewPassword";
import ConfirmSendRecoveryEmail from "./pages/ConfirmSendRecoveryEmail";
import FAQ from "./pages/FAQ";
import NewsPage from "./pages/NewsPage";
import Calendary from "./pages/Calendar";
import PaymentMethods from "./pages/PaymentMethods";
import WithdrawalOfMoney from "./pages/WithdrawalOfMoney";
import AnotherWithdrawalOfMoney from "./pages/AnotherWithdrawalOfMoney";
import QIWIWallet from "./pages/QIWIWallet";
import YandexWallet from "./pages/YandexWallet";
import PayPalWallet from "./pages/PayPalWallet";
import TournamentHistory from "./pages/TournamentHistory";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import PrivateOffice from "./pages/PrivateOffice";


class App extends Component {
    render() {
        return (
            <AppComponent>
                <Switch>
                    <Route exact path={'/'} component={Landing}/>
                    <Route path={'/registration'} component={Registration}/>
                    <Route path={'/privateOffice'} component={PrivateOffice}/>
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
                    <Route path='/qiwi_wallet' component={QIWIWallet}/>
                    <Route path='/yandex_wallet' component={YandexWallet}/>
                    <Route path='/paypal_wallet' component={PayPalWallet}/>
                    <Route path='/tournament_history' component={TournamentHistory}/>
                    <Redirect to={'/registration'}/>
                </Switch>
            </AppComponent>
        )
            ;
    }
}

export default App;


const AppComponent = styled.div`
  font-family: GothamPro, monospace, sans-serif;
  color:  #FFFFFF;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 0 0;
  background-size: cover;
`;
