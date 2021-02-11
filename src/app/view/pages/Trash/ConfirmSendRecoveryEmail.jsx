import React, {Component} from 'react';
import styles from '../../../../styles';
import {Link} from "react-router-dom";
import MenuRoute from "../../components/MenuRoute";
import Footer from "../../components/Footer";

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
                    <div className="recovery-password" style={styles.ConfirmEmailRecoveryDiv}>
                        <div className='recovery-text' style={styles.RecoveryText}>Восстановление пароля</div>
                        <div className='recovery-paragraph' style={styles.RecoveryParagraph}>Мы отправили на вашу почту
                            ссылку для восстановления пароля
                        </div>
                        <Link className="loginEnter" to='/login' style={styles.LinkRecoveryLogin}>или войти</Link>
                        <Link className="loginEnter" to='/new_password' style={styles.LinkRecoveryLogin}>X</Link>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
