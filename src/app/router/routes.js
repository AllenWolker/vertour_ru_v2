import React from 'react';

const PrivateOffice = React.lazy(() =>import('../view/pages/PrivateOffice'));
const PasswordRecovery = React.lazy(() => import('../view/pages/PasswordRecovery'));
const NewPassword = React.lazy(() => import('../view/pages/NewPassword'));
const ConfirmSendRecoveryEmail = React.lazy(() => import('../view/pages/ConfirmSendRecoveryEmail'));
const PaymentMethods = React.lazy(() => import('../view/pages/PaymentMethods'));
const WithdrawalOfMoney = React.lazy(() => import('../view/pages/WithdrawalOfMoney'));
const AnotherWithdrawalOfMoney = React.lazy(() => import('../view/pages/AnotherWithdrawalOfMoney'));
const QIWIWallet = React.lazy(() => import('../view/pages/QIWIWallet'));
const YandexWallet = React.lazy(() => import('../view/pages/YandexWallet'));
const PayPalWallet = React.lazy(() => import('../view/pages/PayPalWallet'));
const TournamentHistory = React.lazy(() => import('../view/pages/TournamentHistory'));
const Calendar = React.lazy(() => import('../view/pages/Calendar'));
const Landing = React.lazy(() => import('../view/pages/Landing'));
const Registration = React.lazy(() => import('../view/pages/Registration'));
const NewsPage = React.lazy(() => import('../view/pages/NewsPage'));
const FAQ = React.lazy(() => import('../view/pages/FAQ'));


const routes = [
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
        path: '/calendar',
        component: Calendar,
        private: false
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
        path: '/faq',
        component: FAQ,
        private: false
    },
    {
        path: 'redirect',
        component: '',
        private: false
    }
];

export default routes;