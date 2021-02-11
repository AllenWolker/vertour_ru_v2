import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import routes from './routes';
import PrivateRoute from './PrivateRoute';
//import Registration from '../pages/Registration';
//import Landing from '../pages/Landing'

const PrivateOffice = React.lazy(() => import('../pages/PrivateOffice'));
const PasswordRecovery = React.lazy(() => import('../pages/PasswordRecovery'));
const NewPassword = React.lazy(() => import('../pages/NewPassword'));
const ConfirmSendRecoveryEmail = React.lazy(() => import('../pages/ConfirmSendRecoveryEmail'));
const FAQ = React.lazy(() => import ('../pages/FAQ'));
const PaymentMethods = React.lazy(() => import('../pages/PaymentMethods'));
const WithdrawalOfMoney = React.lazy(() => import('../pages/WithdrawalOfMoney'));
const AnotherWithdrawalOfMoney = React.lazy(() => import('../pages/AnotherWithdrawalOfMoney'));
const QIWIWallet = React.lazy(() => import('../pages/QIWIWallet'));
const YandexWallet = React.lazy(() => import('../pages/YandexWallet'));
const PayPalWallet = React.lazy(() => import('../pages/PayPalWallet'));
const TournamentHistory = React.lazy(() => import('../pages/TournamentHistory'));
const Landing = React.lazy(() => import('../pages/MainPage/Landing'));
const Registration = React.lazy(() => import('../pages/Registration'));
const NewsPage = React.lazy(() => import('../pages/NewsPage'));
const Calendar = React.lazy(() => import('../pages/Calendar'));

const renderRoutes = (props) => {
    const { authorize } = props;
    console.log(authorize);
/*
    return(
        <Suspense fallback={<div className='preloader'>Загрузка...</div>}>
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
                                    component={props =>(<route.component {...props}/>)}
                                /> :
                                <Route
                                    key={route.key || i}
                                    path={route.path}
                                    component={props =>(<route.component {...props}/>)}
                                />

                    ))
                }
                <Redirect to={'/registration'}/>
            </Switch>
        </Suspense>
    )

 */
    return(
        <Suspense fallback={<div className='preloader'>Загрузка...</div>}>
            <Switch>
                <Route to={'/'} render={()=>(<Registration/>)}/>
                <Route to={'/registration'} render={()=>(<Landing/>)}/>
                <Redirect to={'/registration'}/>
            </Switch>
        </Suspense>
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
