import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const renderRoutes = (props) => {
    const { authorize } = props;
    const ViewRouter = routes.map((route, i) => {
        if (route.path === '/'){
            return <Route key={route.key || i} exact path={route.path} component={route.component}/>
        }else {
            if(route.path === 'redirect'){
                return <Redirect key={route.key || i} to={'/registration'}/>
            }else {
                if(route.private){
                    return <PrivateRoute key={route.key || i} token={authorize.token} path={route.path} component={route.component}/>
                } else {
                    return <PublicRoute key={route.key || i} token={authorize.token} path={route.path}  component={route.component}/>
                }
            }
        }

    });

    return(
        <Switch>
            { ViewRouter }
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
