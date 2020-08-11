import React from 'react';

const PrivateOffice = React.lazy(() =>import('../pages/PrivateOffice'));
const PasswordRecovery = React.lazy(() => ('../pages/PasswordRecovery'));
const NewPassword = React.lazy(() => ('../pages/NewPassword'));
const ConfirmSendRecoveryEmail = React.lazy(() =>('../pages/ConfirmSendRecoveryEmail'));
const FAQ = React.lazy(() => ('../pages/FAQ'));
const PaymentMethods = React.lazy(() => ('../pages/PaymentMethods'));
const WithdrawalOfMoney = React.lazy(() => ('../pages/WithdrawalOfMoney'));
const AnotherWithdrawalOfMoney = React.lazy(() =>('../pages/AnotherWithdrawalOfMoney'));
const QIWIWallet = React.lazy(() =>('../pages/QIWIWallet'));
const YandexWallet = React.lazy(() =>('../pages/YandexWallet'));
const PayPalWallet = React.lazy(() => ('../pages/PayPalWallet'));
const TournamentHistory = React.lazy(() => ('../pages/TournamentHistory'));
const Landing = React.lazy(() => ('../pages/Landing'));
const Registration = React.lazy(() => ('../pages/Registration'));
const NewsPage = React.lazy(() => ('../pages/NewsPage'));
const Calendar = React.lazy(() => ('../pages/Calendar'));

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
];

export default routes;