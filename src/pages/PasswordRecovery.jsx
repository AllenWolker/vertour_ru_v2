import React, {Component} from 'react';
import styles from '../styles'
import {Link} from "react-router-dom";
import MenuRoute from "../components/MenuRoute";
import Footer from "../components/Footer";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    render() {
        return (
            <div style={styles.ContainerLogin}>
                <MenuRoute/>
                <div className='recovery' style={styles.MainRecoveryDiv}>
                    <div className="recovery-password" style={styles.RecoveryPassword}>
                        <div className='recovery-text' style={styles.RecoveryText}>Восстановление пароля</div>
                        <div className='recovery-paragraph' style={styles.RecoveryParagraph}>Введите адрес электронной
                            почты, который использовали при регистрации
                        </div>
                        <input className='recovery-email' style={styles.InputLoginStyle} type="text"
                               placeholder='E-mail'/>
                        <button className="submit-recovery-email" style={styles.SubmitRecoveryEmail}>
                            <Link className="loginEnter" to='/confirm_recovery_email'
                                  style={styles.HrefDecoration}>Отправить</Link>
                        </button>
                        <Link className="loginEnter" to='/login' style={styles.LinkRecoveryLogin}>или войти</Link>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}