import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: RouteComponent, token, ...rest}) => (
    <Route {...rest}
           render={routeProps => ((!token)?
               <Redirect to={'/registration'}/> :
               <RouteComponent {...routeProps}/>)}
    />
);

export default PrivateRoute;