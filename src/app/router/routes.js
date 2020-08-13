import React from 'react';

const PrivateOffice = React.lazy(() =>import('../view/pages/PrivateOffice'));
//const PasswordRecovery = React.lazy(() => import('../pages/PasswordRecovery'));
//const NewPassword = React.lazy(() => import('../pages/NewPassword'));
//const ConfirmSendRecoveryEmail = React.lazy(() => import('../pages/ConfirmSendRecoveryEmail'));
//const FAQ = React.lazy(() => import('../pages/FAQ'));
//const PaymentMethods = React.lazy(() => import('../pages/PaymentMethods'));
//const WithdrawalOfMoney = React.lazy(() => import('../pages/WithdrawalOfMoney'));
//const AnotherWithdrawalOfMoney = React.lazy(() => import('../pages/AnotherWithdrawalOfMoney'));
//const QIWIWallet = React.lazy(() => import('../pages/QIWIWallet'));
//const YandexWallet = React.lazy(() => import('../pages/YandexWallet'));
//const PayPalWallet = React.lazy(() => import('../pages/PayPalWallet'));
//const TournamentHistory = React.lazy(() => import('../pages/TournamentHistory'));
const Landing = React.lazy(() => import('../view/pages/Landing'));
const Registration = React.lazy(() => import('../view/pages/Registration'));
//const NewsPage = React.lazy(() => ('../pages/NewsPage'));
//const Calendar = React.lazy(() => ('../pages/Calendar'));

const routes = [
    /*
    {
        path: '/private_office',
        component: PrivateOffice,
        private: true
    },
    {
        path: '/recovery',
        component: PasswordRecovery,
        private: true
    },
    {
        path: '/new_password',
        component: NewPassword,
        private: true
    },
    {
        path: '/confirm_recovery_email',
        component: ConfirmSendRecoveryEmail,
        private: true
    },
    {
        path: '/faq',
        component: FAQ,
        private: true
    },
    {
        path: '/payment_methods',
        component: PaymentMethods,
        private: true
    },
    {
        path: '/withdrawal',
        component: WithdrawalOfMoney,
        private: true
    },
    {
        path: '/another_withdrawal',
        component: AnotherWithdrawalOfMoney,
        private: true
    },
    {
        path: '/qiwi_wallet',
        component: QIWIWallet,
        private: true
    },
    {
        path: '/yandex_wallet',
        component: YandexWallet,
        private: true
    },
    {
        path: '/paypal_wallet',
        component: PayPalWallet,
        private: true
    },
    {
        path: '/tournament_history',
        component: TournamentHistory,
        private: true
    },
    {
        path: '/',
        component: Landing,
        private: false
    },
    {
        path: '/registration',
        component: Registration,
        private: false
    },
    {
        path: '/news',
        component: NewsPage,
        private: false
    },
    {
        path: '/calendar',
        component: Calendar,
        private: false
    }

     */
    {
        path: '/private_office',
        component: PrivateOffice,
        private: true
    },
    {
        path: '/',
        component: Landing,
        private: false
    },
    {
        path: '/registration',
        component: Registration,
        private: false
    }
];

export default routes;