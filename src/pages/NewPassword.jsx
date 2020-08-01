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
                        <input className='new-password' style={styles.InputLoginStyle} type="password"
                               placeholder='Новый пароль'/>
                        <input className='repeat-new-password' style={styles.InputLoginStyle} type="password"
                               placeholder='Повторите пароль'/>
                        <button className="submit-recovery-email" style={styles.SubmitRecoveryEmail}><Link
                            className="loginEnter" to='/login' style={styles.HrefDecoration}>Создать новый пароль</Link>
                        </button>
                        <Link className="loginEnter" to='/login' style={styles.LinkRecoveryLogin}>или войти</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}