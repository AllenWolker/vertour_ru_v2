import React, {Component} from 'react';
import styles from '../styles'
import LeftMenu from "./LeftMenu";
import {Link} from "react-router-dom";

export default class PayPalWallet extends Component {
    state = {
        currBalance: '100 р',
    };

    render() {
        return (
            <div className='flex'>
                <LeftMenu/>
                <div className="withdrawal-box flex " style={PayPalWalletStyles.PayPalWithdrawalMethodsPageBox}>
                    <div className="flex flex-content-between" style={PayPalWalletStyles.TitleBox}>
                        <div className="withdrawalTitle" style={PayPalWalletStyles.WithdrawalTitle}>Вывод средств
                        </div>
                        <div className="currBalance" style={PayPalWalletStyles.WithdrawalDecoration}><pre>Текущий
                            баланс           {this.state.currBalance}</pre>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-column" style={PayPalWalletStyles.AnotherPaymentsBox}>
                            <div className="logoQIWI" style={PayPalWalletStyles.LogoPayPal}/>
                            <div className="flex-column" style={PayPalWalletStyles.InputPaymentBox}>
                                <label htmlFor="numberWallet" style={PayPalWalletStyles.WithdrawalDecoration}>Номер счета или привязанного к счету номер телефона</label>
                                <input id='numberWallet' type="text"
                                       style={PayPalWalletStyles.InputDesign}/>
                            </div>
                            <div className="flex-column" style={PayPalWalletStyles.InputPaymentBox}>
                                <label htmlFor="total" style={PayPalWalletStyles.WithdrawalDecoration}>Сумма</label>
                                <input id='total' type="text" placeholder='0,00 руб.'
                                       style={PayPalWalletStyles.InputDesign}/>
                            </div>
                            <div className="flex">
                                <div className="flex-column" style={PayPalWalletStyles.InputPaymentBox}>
                                    <label htmlFor="toPay" style={PayPalWalletStyles.WithdrawalDecoration}>К
                                        оплате</label>
                                    <input id='toPay' type="text" placeholder='0,00 руб.'
                                           style={PayPalWalletStyles.InputDesign}/>
                                </div>
                                <div className="includingСommission"
                                     style={PayPalWalletStyles.IncludingComission}>С учетом комиссии
                                </div>
                                <button className="toPay" style={PayPalWalletStyles.ButtonWithdrawal}>Оплатить</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        );
    }
};


//Style
const PayPalWithdrawalMethodsPageBox = {
    width: '960px',
    height: '600px',
    marginTop: '1%',
    marginLeft: '15%',
    background: 'rgba(0, 0, 0, 0.65)',
    flexDirection: 'column',
    marginBottom: '90px',
};
const LogoPayPal = {
    width: '121px',
    height: '121px',
    backgroundImage: 'url("/assets/payments_icon/PayPal.png")',
    backgroundRepeat: 'no-repeat',
    marginBottom: '24px',
};
const ButtonWithdrawal = {
    width: ' 280px',
    height: '60px',
    background: '#840318',
    borderRadius: '5px',
    border: '1px solid #840318',
    color: '#FFFFFF',
    marginLeft: '40px',
    marginTop: '65px',
};
const InputDesign = {
    width: '350px',
    height: '40px',
    border: '0px',
    borderBottom: '1px solid #C4C4C4',
    background: 'rgba(0, 0, 0, 0.65)',
    // marginLeft: '40px',
    marginRight: '40px',
    color: 'white',

};
const TitleBox = {
    marginTop: '30px',
    marginLeft: '40px',
    marginBottom: '20px',
    marginRight: '100px',
};
const InputPaymentBox = {
    marginBottom: '40px',
};
const AnotherPaymentsBox = {
    marginLeft: '40px',
}
const IncludingComission = {
    marginTop: '33px',
    color: 'gray'
};

const WithdrawalTitle = Object.assign({}, styles.TitleFontFooter);
const WithdrawalDecoration = Object.assign({}, styles.HrefDecoration);
WithdrawalDecoration.fontSize = '16px';
WithdrawalDecoration.marginBottom = '20px';

const PayPalWalletStyles = {
    PayPalWithdrawalMethodsPageBox: PayPalWithdrawalMethodsPageBox,
    WithdrawalTitle: WithdrawalTitle,
    LogoPayPal: LogoPayPal,
    ButtonWithdrawal: ButtonWithdrawal,
    InputDesign: InputDesign,
    TitleBox: TitleBox,
    WithdrawalDecoration: WithdrawalDecoration,
    InputPaymentBox: InputPaymentBox,
    AnotherPaymentsBox: AnotherPaymentsBox,
    IncludingComission: IncludingComission,

};
