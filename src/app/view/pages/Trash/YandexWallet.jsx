import React, {Component} from 'react';
import styles from '../../../../styles';
import LeftMenu from "../../components/LeftMenu";
import {Link} from "react-router-dom";
import MenuRoute from "../../components/MenuRoute";
import Footer from "../../components/Footer";
import styled from 'styled-components';

export default class YandexWallet extends Component {
    state = {
        currBalance: '100 р',
    };

    render() {
        return (
            <div style={styles.ContainerLogin}>
                <MenuRoute/>
                <div className='flex'>
                    <LeftMenu/>
                    <div className="withdrawal-box flex " style={YandexWalletStyles.YandexWithdrawalMethodsPageBox}>
                        <div className="flex flex-content-between" style={YandexWalletStyles.TitleBox}>
                            <div className="withdrawalTitle" style={YandexWalletStyles.WithdrawalTitle}>Вывод средств
                            </div>
                            <div className="currBalance" style={YandexWalletStyles.WithdrawalDecoration}><pre>Текущий
                            баланс {this.state.currBalance}</pre>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-column" style={YandexWalletStyles.AnotherPaymentsBox}>
                                <div className="logoQIWI" style={YandexWalletStyles.LogoYandex}/>
                                <div className="flex-column" style={YandexWalletStyles.InputPaymentBox}>
                                    <label htmlFor="numberWallet" style={YandexWalletStyles.WithdrawalDecoration}>Номер
                                        счета или привязанного к счету номер телефона</label>
                                    <input id='numberWallet' type="text"
                                           style={YandexWalletStyles.InputDesign}/>
                                </div>
                                <div className="flex-column" style={YandexWalletStyles.InputPaymentBox}>
                                    <label htmlFor="total" style={YandexWalletStyles.WithdrawalDecoration}>Сумма</label>
                                    <input id='total' type="text" placeholder='0,00 руб.'
                                           style={YandexWalletStyles.InputDesign}/>
                                </div>
                                <div className="flex">
                                    <div className="flex-column" style={YandexWalletStyles.InputPaymentBox}>
                                        <label htmlFor="toPay" style={YandexWalletStyles.WithdrawalDecoration}>К
                                            оплате</label>
                                        <input id='toPay' type="text" placeholder='0,00 руб.'
                                               style={YandexWalletStyles.InputDesign}/>
                                    </div>
                                    <div className="includingСommission"
                                         style={YandexWalletStyles.IncludingComission}>С учетом комиссии
                                    </div>
                                    <button className="toPay" style={YandexWalletStyles.ButtonWithdrawal}>Оплатить
                                    </button>
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
const YandexWithdrawalMethodsPageBox = styled.div`
    width: 960px;
    height: 600px;
    marginTop: 1%;
    marginLeft: 15%;
    background: rgba(0, 0, 0, 0.65);
    flexDirection: column;
    marginBottom: 90px;
`;
const LogoYandex = styled.div`
    width: 121px;
    height: 121px;
    backgroundImage: url("/assets/payments_icon/YANDEX.png");
    backgroundRepeat: no-repeat;
    marginBottom: 24px;
`;
const ButtonWithdrawal = styled.button`
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
    width: 350px;
    height: 40px;
    border: 0px;
    borderBottom: 1px solid #C4C4C4;
    background: rgba(0, 0, 0, 0.65);
    // marginLeft: 40px;
    marginRight: 40px;
    color: white;
`;
const TitleBox = styled.div`
    marginTop: 30px;
    marginLeft: 40px;
    marginBottom: 20px;
    marginRight: 100p;
`;
const InputPaymentBox = styled.div`
    marginBottom: 40px;
`;
const AnotherPaymentsBox = styled.div`
    marginLeft: 40px;
`;
const IncludingComission = styled.div`
    marginTop: 33px;
    color: gray;
`;

const WithdrawalTitle = Object.assign({}, styles.TitleFontFooter);
const WithdrawalDecoration = Object.assign({}, styles.HrefDecoration);
WithdrawalDecoration.fontSize = '16px';
WithdrawalDecoration.marginBottom = '20px';

const YandexWalletStyles = {
    YandexWithdrawalMethodsPageBox: YandexWithdrawalMethodsPageBox,
    WithdrawalTitle: WithdrawalTitle,
    LogoYandex: LogoYandex,
    ButtonWithdrawal: ButtonWithdrawal,
    InputDesign: InputDesign,
    TitleBox: TitleBox,
    WithdrawalDecoration: WithdrawalDecoration,
    InputPaymentBox: InputPaymentBox,
    AnotherPaymentsBox: AnotherPaymentsBox,
    IncludingComission: IncludingComission,

};
