import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import routes from './routes';
import PrivateRoute from './PrivateRoute';

const PrivateOffice = React.lazy(() =>import('../view/pages/PrivateOffice'));
const Landing = React.lazy(() => import('../view/pages/Landing'));
const Registration = React.lazy(() => import('../view/pages/Registration'));

const renderRoutes = (props) => {
    const { authorize } = props;
    return(
        <Switch>
            <Route exact path={'/'} component={Landing}/>
            <Route path={'/registration'}  render={pros =>(<Registration token={authorize.token} {...pros}/>)}/>
            <PrivateRoute token={authorize.token} path={'/private_office'} component={PrivateOffice}/>
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

/*
           {
               routes.map((route, i) =>(
                   (route.private)?
                       <PrivateRoute
                           key={route.key || i}
                           token={authorize.token}
                           path={route.path}
                           component={route.component}/> :
                       (route.path === '/registration')?
                           <Route
                               key={route.key || i}
                               path={route.path}
                               render={props =>(<route.component token={authorize.token} {...prop}/>)}
                           /> :
                           <Route
                               key={route.key || i}
                               path={route.path}
                               component={route.component}
                           />

               ))
           }

            */