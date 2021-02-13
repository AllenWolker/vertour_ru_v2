import React from 'react';
import FAQ from '../view/pages/FAQ/FAQ';
const PrivateOffice = React.lazy(() =>import('../view/pages/Trash/PrivateOffice'));
const PasswordRecovery = React.lazy(() => import('../view/pages/Trash/PasswordRecovery'));
const NewPassword = React.lazy(() => import('../view/pages/Trash/NewPassword'));
const ConfirmSendRecoveryEmail = React.lazy(() => import('../view/pages/Trash/ConfirmSendRecoveryEmail'));
const PaymentMethods = React.lazy(() => import('../view/pages/Trash/PaymentMethods'));
const WithdrawalOfMoney = React.lazy(() => import('../view/pages/Trash/WithdrawalOfMoney'));
const AnotherWithdrawalOfMoney = React.lazy(() => import('../view/pages/Trash/AnotherWithdrawalOfMoney'));
const QIWIWallet = React.lazy(() => import('../view/pages/Trash/QIWIWallet'));
const YandexWallet = React.lazy(() => import('../view/pages/Trash/YandexWallet'));
const PayPalWallet = React.lazy(() => import('../view/pages/Trash/PayPalWallet'));
const TournamentHistory = React.lazy(() => import('../view/pages/Trash/TournamentHistory'));
const Calendar = React.lazy(() => import('../view/pages/Trash/Calendar'));
const Landing = React.lazy(() => import('../view/pages/Landing/landing'));
const Registration = React.lazy(() => import('../view/pages/Registration/Registration'));
const NewsPage = React.lazy(() => import('../view/pages/Trash/NewsPage'));



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
