import React, {Component} from 'react';
import styles from '../../../../styles';
import LeftMenu from "../../components/LeftMenu";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import MenuRoute from "../../components/MenuRoute";
import Footer from "../../components/Footer";
import styled from 'styled-components';

export default class AnotherWithdrawalOfMoney extends Component {

    state = {
        currBalance: '      100 р',
    };

    render() {
        return (
            <div className='flex' style={styles.ContainerLogin}>
                <MenuRoute/>
                <LeftMenu/>
                <div className="withdrawal-box flex "
                     style={AnotherWithdrawalMethodsStyles.AnotherWithdrawalMethodsPageBox}>
                    <div className="flex flex-content-between" style={AnotherWithdrawalMethodsStyles.TitleBox}>
                        <div className="withdrawalTitle" style={AnotherWithdrawalMethodsStyles.WithdrawalTitle}>Вывод
                            средств
                        </div>
                        <div className="currBalance" style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>Текущий
                            баланс {this.state.currBalance}</div>
                    </div>

                    <div className="flex" style={AnotherWithdrawalMethodsStyles.PaymentBox}>
                        <div className="flex-column withdrawalCreditCard"
                             style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>
                            <div className="logoBankCard" style={AnotherWithdrawalMethodsStyles.LogoBankCard}/>
                            <div className="inTheBankCard">
                                <Link to='/withdrawal' style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>На
                                    банковскую карточку </Link>
                            </div>
                        </div>

                        <div className="flex-column withdrawalAnotherWallet"
                             style={AnotherWithdrawalMethodsStyles.PaymentBox}>
                            <div className="logoAnotherWallet"
                                 style={AnotherWithdrawalMethodsStyles.LogoAnotherWallet}/>
                            <div className="anotherWallet">
                                <Link to='/another_withdrawal'
                                      style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>Другой кошелек</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-column" style={AnotherWithdrawalMethodsStyles.AnotherPaymentsBox}>
                            <Link to='/qiwi_wallet' style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>
                                <div className="logoQIWI" style={AnotherWithdrawalMethodsStyles.LogoQIWI}/>
                                <div className="textQIWI"
                                     style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>QIWI Кошелек
                                </div>
                            </Link>

                        </div>
                        <div className="flex-column" style={AnotherWithdrawalMethodsStyles.AnotherPaymentsBox}>
                            <Link to='/yandex_wallet' style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>
                                <div className="logoYandex" style={AnotherWithdrawalMethodsStyles.LogoYandex}/>
                                <div className="textYandex"
                                     style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>Яндекс Деньги
                                </div>
                            </Link>
                        </div>
                        <div className="flex-column" style={AnotherWithdrawalMethodsStyles.AnotherPaymentsBox}>
                            <Link to='/paypal_wallet' style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>
                                <div className="logoPayPal" style={AnotherWithdrawalMethodsStyles.LogoPayPal}/>
                                <div className="textPayPal"
                                     style={AnotherWithdrawalMethodsStyles.WithdrawalDecoration}>PayPal
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
};


//Style
const AnotherWithdrawalMethodsPageBox = styled.div`
    width: 960px;
    height: 600px;
    marginTop: 1%;
    marginLeft: 15%;
    background: rgba(0, 0, 0, 0.65);
    flexDirection: column;
    marginBottom: 90px;
`;
const LogoBankCard = styled.div`
    width: 65px;
    height: 50px;
    backgroundImage: url("/assets/payments_icon/creditcard.png");
    backgroundRepeat: no-repeat;
    marginLeft: 17px;
    marginBottom: 24p;
`;
const LogoAnotherWallet = styled.div`
    width: 60px;
    height: 58px;
    backgroundImage: url("/assets/payments_icon/wallet.png");
    backgroundRepeat: no-repeat;
    marginBottom: 24px;
`;
const LogoQIWI = styled.div`
    width: 121px;
    height: 121px;
    backgroundImage: url("/assets/payments_icon/QIWI.png")
    backgroundRepeat: no-repeat;
    marginLeft: 17px;
    marginBottom: 24px;
`;
const LogoYandex = styled.div`
    width: 121px;
    height: 121px;
    backgroundImage: url("/assets/payments_icon/YANDEX.png");
    backgroundRepeat: no-repeat;
    marginBottom: 24px;
`;
const LogoPayPal = styled.div`
    width: 121px;
    height: 121px;
    backgroundImage: url("/assets/payments_icon/PayPal.png");
    backgroundRepeat: no-repeat;
    marginBottom: 24px;
`;
const ButtonWithdrawal = styled.div`
    width: 280px;
    height: 60px;
    background: #840318;
    borderRadius: 5px;
    border: 1px solid #840318;
    color: #FFFFFF;
    marginLeft: 40px;
    marginTop: 65px;
`;
const InputDesign = styled.input`
    height: 40px;
    border: 0px;
    borderTop: 1px solid #C4C4C4;
    borderBottom: 1px solid #C4C4C4;
    background: rgba(0, 0, 0, 0.65);
    marginLeft: 40px;
    marginRight: 40px;
    color: white;
`;
const TitleBox = styled.div`
    marginTop: 40px;
    marginLeft: 40px;
    marginBottom: 50px;
    marginRight: 100px;
`;
const PaymentBox = styled.div`
    width: 120px;
    height: 140px;
    marginLeft: 70px;
    marginBottom: 40px;
`;
const AnotherPaymentsBox = styled.div`
    marginLeft: 40px;
`;
const WithdrawalTitle = Object.assign({}, styles.TitleFontFooter);
const WithdrawalDecoration = Object.assign({}, styles.HrefDecoration);
WithdrawalDecoration.fontSize = '16px';
WithdrawalDecoration.textAlign = 'center';
WithdrawalDecoration.textDecoration = 'none';

const AnotherWithdrawalMethodsStyles = {
    AnotherWithdrawalMethodsPageBox: AnotherWithdrawalMethodsPageBox,
    WithdrawalTitle: WithdrawalTitle,
    LogoBankCard: LogoBankCard,
    LogoAnotherWallet: LogoAnotherWallet,
    LogoQIWI: LogoQIWI,
    LogoYandex: LogoYandex,
    ButtonWithdrawal: ButtonWithdrawal,
    InputDesign: InputDesign,
    TitleBox: TitleBox,
    WithdrawalDecoration: WithdrawalDecoration,
    PaymentBox: PaymentBox,
    LogoPayPal: LogoPayPal,
    AnotherPaymentsBox: AnotherPaymentsBox,

};
