import React, { Component } from 'react';
import styled from 'styled-components';
import ViewRouter from './app/router/renderRoutes';

const AppComponent = styled.div`
  font-family: GothamPro, monospace, sans-serif;
  color:  #FFFFFF;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 0 0;
  background-size: cover;
`;


class App extends Component{
    render() {
        return (
            <AppComponent>
                <React.Suspense fallback={<div className='preloader'>Загрузка...</div>}>
                    <ViewRouter/>
                </React.Suspense>
            </AppComponent>
        );
    }
}

export default App;