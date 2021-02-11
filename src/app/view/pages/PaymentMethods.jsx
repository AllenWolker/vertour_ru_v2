import React, {Component} from 'react';
import styles from '../../../styles';
import LeftMenu from "../components/LeftMenu";
import {Link} from "react-router-dom";
import MenuRoute from "../components/MenuRoute";
import Footer from "../components/Footer";
import styled from 'styled-components';

export default class PaymentMethods extends Component {
    state = {
        money: `${10} руб`,
        dataPaymentMethod: '**** 4567',
        datePaymentMethod: '03/08',
        currCash: '1234$',
    };

    render() {
        return (
            <div style={styles.ContainerLogin}>
                <MenuRoute/>
                <div className='flex' style={PaymentMethodsStyles.BgContainer}>

                    <LeftMenu/>
                    <div className="paymentMethods-box flex" style={PaymentMethodsStyles.PaymentMethodsPageBox}>
                        <div className="title_payments" style={PaymentMethodsStyles.TitleWalletStyle}>Кошелек Vertour
                        </div>
                        <div className='flex flex-column'>
                            <div className='flex flex-content-between' style={PaymentMethodsStyles.BalanceBox}>
                                <div className="curr_balance" style={PaymentMethodsStyles.PaymentDecoration}>Текущий
                                    баланс: {this.state.money}</div>
                                <div className="withdrawal_funds" style={PaymentMethodsStyles.PaymentDecoration}>
                                    <Link to='/withdrawal'> Вывод средств </Link>
                                </div>
                            </div>
                            <div className='flex flex-content-between' style={PaymentMethodsStyles.PaymentsBox}>
                                <div className="payment_methods"
                                     style={PaymentMethodsStyles.TitlePayments}>Ваши способы оплаты
                                </div>
                                <div className="add_payment_method"
                                     style={PaymentMethodsStyles.PaymentDecoration}>+ Добавить новый способ оплаты
                                </div>
                            </div>
                            <div className='flex flex-wrap'>
                                <div className="payment_method-box flex" style={PaymentMethodsStyles.PaymentMethodBox}>
                                    <div className="logo_payment" style={PaymentMethodsStyles.LogoPayments}/>
                                    <div className='flex flex-column'>
                                        <div className="data_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.dataPaymentMethod}</div>
                                        <div className="date_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.datePaymentMethod}</div>
                                    </div>
                                    <div className="curr_cash"
                                         style={PaymentMethodsStyles.PaymentDecoration}>{this.state.currCash}</div>
                                </div>
                                <div className="payment_method-box flex" style={PaymentMethodsStyles.PaymentMethodBox}>
                                    <div className="logo_payment" style={PaymentMethodsStyles.LogoPayments}/>
                                    <div className='flex flex-column'>
                                        <div className="data_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.dataPaymentMethod}</div>
                                        <div className="date_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.datePaymentMethod}</div>
                                    </div>
                                    <div className="curr_cash"
                                         style={PaymentMethodsStyles.PaymentDecoration}>{this.state.currCash}</div>
                                </div>
                                <div className="payment_method-box flex" style={PaymentMethodsStyles.PaymentMethodBox}>
                                    <div className="logo_payment" style={PaymentMethodsStyles.LogoPayments}/>
                                    <div className='flex flex-column'>
                                        <div className="data_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.dataPaymentMethod}</div>
                                        <div className="date_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.datePaymentMethod}</div>
                                    </div>
                                    <div className="curr_cash"
                                         style={PaymentMethodsStyles.PaymentDecoration}>{this.state.currCash}</div>
                                </div>
                                <div className="payment_method-box flex" style={PaymentMethodsStyles.PaymentMethodBox}>
                                    <div className="logo_payment" style={PaymentMethodsStyles.LogoPayments}/>
                                    <div className='flex flex-column'>
                                        <div className="data_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.dataPaymentMethod}</div>
                                        <div className="date_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.datePaymentMethod}</div>
                                    </div>
                                    <div className="curr_cash"
                                         style={PaymentMethodsStyles.PaymentDecoration}>{this.state.currCash}</div>
                                </div>
                                <div className="payment_method-box flex" style={PaymentMethodsStyles.PaymentMethodBox}>
                                    <div className="logo_payment" style={PaymentMethodsStyles.LogoPayments}/>
                                    <div className='flex flex-column'>
                                        <div className="data_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.dataPaymentMethod}</div>
                                        <div className="date_payment"
                                             style={PaymentMethodsStyles.PaymentDecoration}>{this.state.datePaymentMethod}</div>
                                    </div>
                                    <div className="curr_cash"
                                         style={PaymentMethodsStyles.PaymentDecoration}>{this.state.currCash}</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer/>
            </div>

        );
    }
};


//Style
const PaymentMethodsPageBox = styled.div`
    maxWidth: 960px;
    height: 600px;
    marginTop: 1%;
    marginLeft: 15%;
    background: rgba(0, 0, 0, 0.65);
    flexDirection: column;
    marginBottom: 90px;
`;
const LogoPayments = styled.div`
    width: 48px;
    height: 48px;
    backgroundImage: url("/assets/payments_icon/Visa.png");
`;
const PaymentMethodBox = styled.div`
    width: 325px;
    height: 80px';
    border: 1px solid white;
    borderRadius: 10px;
    justifyContent: space-evenly;
    alignItems: center;
    marginLeft: 40px;
    marginTop: 15px;
`;
let TitleWalletStyle = styled.div`
    margin: 40px;
    marginRight: 0px;
`;
const PaymentsBox = styled.div`
    margin: 40px;
    marginTop: 80px;
`;
const BalanceBox = styled.div`
    marginLeft: 40px;
    marginRight: 40px;
`;
const BgContainer = Object.assign({}, styles.ContainerLogin);

const TitlePayments = Object.assign({}, styles.TitleFontFooter);
TitlePayments.fontSize = '24px';
TitlePayments.fontWeight = '23px';

TitleWalletStyle = Object.assign(TitleWalletStyle, TitlePayments);

const PaymentDecoration = Object.assign({}, styles.HrefDecoration);
PaymentDecoration.fontSize = '16px';

const PaymentMethodsStyles = {
    PaymentMethodsPageBox: PaymentMethodsPageBox,
    LogoPayments: LogoPayments,
    TitlePayments: TitlePayments,
    PaymentDecoration: PaymentDecoration,
    PaymentMethodBox: PaymentMethodBox,
    TitleWalletStyle: TitleWalletStyle,
    PaymentsBox: PaymentsBox,
    BalanceBox: BalanceBox,
    BgContainer: BgContainer,
};
