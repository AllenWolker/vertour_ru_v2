import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Redirect, Switch } from 'react-router-dom';

import PrivateOffice from './app/view/pages/PrivateOffice';
import Landing from './app/view/pages/Landing';
import Registration from './app/view/pages/Registration';

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
                <Switch>
                    <Route exact path={'/'} component={Landing}/>
                    <Route path={'/registration'}  component={Registration}/>
                    <Route path={'/privateOffice'} component={PrivateOffice}/>
                    <Redirect to={'/registration'} />
                </Switch>
            </AppComponent>
        );
    }
}

export default App;