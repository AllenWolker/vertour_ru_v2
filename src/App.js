import React from 'react';
import './App.css';
import styles from "./styles";
import styled from 'styled-components';
import ViewRouter from './app/router/renderRoutes';

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
                <React.Suspense fallback={<div className='preloader'>Загрузка...</div>}>
                    <ViewRouter />
                </React.Suspense>
            </AppComponent>
        );
    }
}