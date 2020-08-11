import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './routes';
import PrivateRoute from './PrivateRoute';

const renderRoutes = (props) => {
    const { token } = props.authorize.token;
    return(
        <Switch>
            {
                routes.map((route, i) =>(
                    (route.private)?
                        <PrivateRoute
                            key={route.key || i}
                            token={token}
                            path={route.path}
                            component={route.component}/> :
                        (route.path === '/registration')?
                            <Route
                                key={route.key || i}
                                token={token}
                                path={route.path}
                                component={route.component}/> :
                            <Route
                                key={route.key || i}
                                path={route.path}
                                component={route.component}
                            />

                ))
            }
            <Redirect to={'/registration'}/>
        </Switch>
    )
};

const mapStateToProps = (store) => {
    return {
        authorize: store.authorize
    }
};

export default connect(
    mapStateToProps
)(renderRoutes);