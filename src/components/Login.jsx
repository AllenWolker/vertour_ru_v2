import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react'
import styles from '../styles'
import {Link} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    render() {
        return (
            <div>
                <div className='LoginForm' style={styles.LoginComponent}>

                    <form style={styles.LoginEnter}>
                        <div className='enter-form' style={styles.RegisterForm}> Вход</div>
                        <input name='login' placeholder='Логин' style={styles.InputLoginStyle}/>
                        <input name='password' type='password' placeholder='Пароль' style={styles.InputLoginStyle}/>

                        <div className="flex" style={{display: 'flex', width: '300px'}}>
                            <Button type='submit' style={styles.LogInButton}>Вход</Button>
                            <Button type='submit' style={styles.ForgotPassButton}><Link to='/recovery' style={styles.HrefDecoration}>Забыли пароль?</Link></Button>
                        </div>
                    </form>

                    <form className='register-form' style={styles.PageRegister}>
                        <div className='register-form' style={styles.RegisterForm}>Регистрация</div>
                        <div className="flex" style={styles.NamesWrapper}>
                            <input name='firstName' placeholder='Имя' style={styles.InputNamesStyle}/>
                            <input name='secondName' placeholder='Фамилия' style={styles.InputSecondNameStyle}/>
                        </div>
                        <div className='input-data-wrap' style={styles.InputDataWrap}>
                            <input name='email' placeholder='E-mail' style={styles.InputLoginStyle}/>
                            <input name='login' placeholder='Логин' style={styles.InputLoginStyle}/>
                            <input name='password' type='password' placeholder='Пароль' style={styles.InputLoginStyle}/>
                        </div>
                        <br/>
                        <div>
                            <input name='agreement' id='agreement' type='checkbox'/>
                            <label htmlFor='agreement' style={styles.AgreementsStyle}>Я принимаю условия политики и
                                конфиденциальности</label>
                        </div>

                        <br/>
                        <Button type='submit' style={styles.LogInButton}>Регистрация</Button>
                    </form>
                </div>
            </div>

        );
    }
}