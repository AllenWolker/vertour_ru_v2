import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import routes from './routes';  // массив всех роутов приложения,
                                 // который должен быть преобразован при помощи
                                 // стандартной функции map
import PrivateRoute from './PrivateRoute';


const PrivateOffice = {
    path: '/private_office',
    component: React.lazy(() =>import('../view/pages/PrivateOffice'))
};
const Landing = {
    path: '/',
    component: React.lazy(() => import('../view/pages/Landing'))
};
const Registration = {
    path: '/registration',
    component: React.lazy(() => import('../view/pages/Registration'))
};


const renderRoutes = (props) => {
    const { authorize } = props;
    return(
        <Switch>
            <Route exact path={Landing.path} component={Landing.component}/>
            <Route path={Registration.path}  render={pros =>(<Registration.component token={authorize.token} {...pros}/>)}/>
            <PrivateRoute token={authorize.token} path={PrivateOffice.path} component={PrivateOffice.component}/>
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

// функция, создающая переменную, содержащую массив всех роутов приложения,
// которая должна быть помещена между тэгами Switch.
// Массив создается, но роутинг почему-то отказывается работать. Причину не обнаружил.
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