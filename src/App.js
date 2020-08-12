import React from 'react';
import './App.css';
import styles from "./styles";
import styled from 'styled-components';
//import ViewRouter from './app/router/renderRoutes';
import { Route, Switch, Redirect } from 'react-router-dom';

import Registration from './app/pages/Registration';
import Landing from './app/pages/Landing'

import Footer from "./app/components/Footer";




const AppComponent = styled.div`
  font-family: GothamPro, monospace, sans-serif;
  color:  #FFFFFF;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 0 0;
  background-size: cover;
`;


export default class App extends React.Component {
    render() {
        return (
            <AppComponent>
                <Switch>
                    <Route to={'/'} component={Landing}/>
                    <Route to={'/registration'} component={Registration}/>
                    <Redirect to={'/registration'}/>
                </Switch>
            </AppComponent>
        );
    }
}