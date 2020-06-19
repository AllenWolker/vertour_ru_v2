import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import PrivateOffice from './app/view/pages/PrivateOffice';
import Landing from './app/view/pages/Landing';

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
                    <Route exact path={'/'} component={PrivateOffice}/>
                    <Route path={'/landing'} component={Landing}/>
                    <Route path={'*'} component={Error} />
                </Switch>
            </AppComponent>
        );
    }
}

export default App;