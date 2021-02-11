import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({component: RouteComponent, token, path, ...rest}) => (
    <Route {...rest}
           render={routeProps => ((path === '/registration')?
               <RouteComponent token={token} {...routeProps}/> :
               <RouteComponent {...routeProps}/>)}
    />
);

export default PublicRoute;