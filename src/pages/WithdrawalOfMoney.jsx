import React, {Component} from 'react';
import styles from '../styles'
import LeftMenu from "../components/LeftMenu";
import {Link} from "react-router-dom";
import MenuRoute from "../components/MenuRoute";
import Footer from "../components/Footer";

export default class WithdrawalOfMoney extends Component {
    state = {
        currBalance: '      100 р',
    };

    render() {
        return (
            <div style={styles.ContainerLogin}>
                <MenuRoute/>
                <div className='flex'>
                    <LeftMenu/>
                    <div className="withdrawal-box flex " style={WithdrawalMethodsStyles.WithdrawalMethodsPageBox}>
                        <div className="flex flex-content-between" style={WithdrawalMethodsStyles.TitleBox}>
                            <div className="withdrawalTitle" style={WithdrawalMethodsStyles.WithdrawalTitle}>Вывод
                                средств
                            </div>
                            <div className="currBalance" style={WithdrawalMethodsStyles.WithdrawalDecoration}>Текущий
                                баланс {this.state.currBalance}</div>
                        </div>

                        <div className="flex" style={WithdrawalMethodsStyles.PaymentBox}>
                            <div className="flex-column withdrawalCreditCard"
                                 style={WithdrawalMethodsStyles.WithdrawalDecoration}>
                                <div className="logoBankCard" style={WithdrawalMethodsStyles.LogoBankCard}/>
                                <div className="inTheBankCard">
                                    <Link to='/withdrawal' style={WithdrawalMethodsStyles.WithdrawalDecoration}>На
                                        банковскую карточку </Link>
                                </div>
                            </div>

                            <div className="flex-column withdrawalAnotherWallet"
                                 style={WithdrawalMethodsStyles.PaymentBox}>
                                <div className="logoAnotherWallet" style={WithdrawalMethodsStyles.LogoAnotherWallet}/>
                                <div className="anotherWallet">
                                    <Link to='/another_withdrawal' style={WithdrawalMethodsStyles.WithdrawalDecoration}>Другой
                                        кошелек</Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-column">
                            <input type='text' className="numberCard" placeholder='Номер карты'
                                   style={WithdrawalMethodsStyles.InputDesign}/>
                            <input type='text' className="amount" placeholder='Сумма'
                                   style={WithdrawalMethodsStyles.InputDesign}/>
                            <button className="withdrawal" style={WithdrawalMethodsStyles.ButtonWithdrawal}>Вывести на
                                карту
                            </button>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>

        );
    }
};


//Style
const WithdrawalMethodsPageBox = {
    width: '960px',
    height: '600px',
    marginTop: '1%',
    marginLeft: '15%',
    background: 'rgba(0, 0, 0, 0.65)',
    flexDirection: 'column',
    marginBottom: '90px',
};
const LogoBankCard = {
    width: '65px',
    height: '50px',
    backgroundImage: 'url("/assets/payments_icon/creditcard.png")',
    backgroundRepeat: 'no-repeat',
    marginLeft: '17px',
    marginBottom: '24px',
};
const LogoAnotherWallet = {
    width: '60px',
    height: '58px',
    backgroundImage: 'url("/assets/payments_icon/wallet.png")',
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
    height: '40px',
    border: '0px',
    borderTop: '1px solid #C4C4C4',
    borderBottom: '1px solid #C4C4C4',
    background: 'rgba(0, 0, 0, 0.65)',
    marginLeft: '40px',
    marginRight: '40px',
    color: 'white',

};
const TitleBox = {
    marginTop: '40px',
    marginLeft: '40px',
    marginBottom: '50px',
    marginRight: '100px',
};
const PaymentBox = {
    width: '120px',
    height: '140px',
    marginLeft: '70px',
    marginBottom: '40px',
};
const CreditCardBox = {
    marginLeft: '70px',
};
const WithdrawalTitle = Object.assign({}, styles.TitleFontFooter);
const WithdrawalDecoration = Object.assign({}, styles.HrefDecoration);
WithdrawalDecoration.fontSize = '16px';
WithdrawalDecoration.textAlign = 'center';
WithdrawalDecoration.textDecoration = 'none';

const WithdrawalMethodsStyles = {
    WithdrawalMethodsPageBox: WithdrawalMethodsPageBox,
    WithdrawalTitle: WithdrawalTitle,
    LogoBankCard: LogoBankCard,
    LogoAnotherWallet: LogoAnotherWallet,
    ButtonWithdrawal: ButtonWithdrawal,
    InputDesign: InputDesign,
    TitleBox: TitleBox,
    WithdrawalDecoration: WithdrawalDecoration,
    PaymentBox: PaymentBox,
    CreditCardBox: CreditCardBox,

};
