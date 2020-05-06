import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react'
import styles from '../styles'
import {Link} from "react-router-dom";


const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
};
const json = response => response.json();


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            firstName: this.props.firstName,
            secondName: this.props.secondName,
            email: this.props.email,
            password: this.props.password,
            repeatPassword: this.props.repeatPassword,
            login: this.props.login
        };
        this.loginRef = React.createRef();
        this.firstNameRef = React.createRef();
        this.secondNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

        this.onSetState = this.onSetState.bind(this);
        //  this.removeUser = this.removeUser.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    //Установка значений полей
    onSetState(event) {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    //добавление пользователя
    addUser(event) {
        let that = this;
        event.preventDefault();
        let users_data = {
            lastname: this.secondNameRef.current.value,
            firstname: this.firstNameRef.current.value,
            patronymic: this.loginRef.current.value,
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value,
            roles: []
            //id: Math.random().toFixed(4)
        };

        if (this.state.password === undefined
            || this.state.email === undefined
            || this.state.login === undefined
            || this.state.firstName === undefined
            || this.state.secondName === undefined) {
            alert('Одно или несколько полей пусты, пожалуйста заполните их');
        } else if (this.state.password !== this.state.repeatPassword || this.state.password.length < 8) {
            alert('поля пароля не совпадают либо пароль слишком короткий(пароль должен быть минимум 8 символов)');
            console.log(this.state.password, this.state.repeatPassword)
        } else {
            const request = new Request('https://dev.vertour.ru/api/auth/registration', {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(users_data)
            });

            fetch(request)
                .then(response => {
                    if (response.status === 422) {
                        alert('Пользователь с таким логином уже существует, пожалуйста придумайте другой логин!');
                    }
                    console.log('response', response);
                    response.json()
                        .then(data => {
                            if (data.detail) {
                                alert('Пользователь с таким логином уже существует, пожалуйста придумайте другой логин!');
                                console.log('detail', data.detail);
                            } else {
                                let users = that.state.users;
                                users.push(users_data);
                                that.setState({
                                    users: users
                                });
                                alert('Регистрация прошла успешно');
                                console.log('data reg', data);
                            }
                            console.log('data', data);
                        })
                        .catch(err => {
                            console.log('err', err);
                        })

                })
        }

    }

    // вход
    loginUser(event) {
        let that = this;
        event.preventDefault();
        let users_data = {
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value,
        };

        if (this.state.password === undefined || this.state.email === undefined) {
            alert('Одно или несколько полей пусты, пожалуйста заполните их');
        } else {
            const loginRequest = new Request('https://dev.vertour.ru/api/auth/login', {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(users_data)
            });

        }

        fetch(loginRequest)
            .then(response => {
                if (response.status === 422) {
                    alert('Пользователь с таким логином уже существует, пожалуйста придумайте другой логин!');
                }
                console.log('response', response);
                response.json()
                    .then(data => {
                            let users = that.state.users;
                            users.push(users_data);
                            that.setState({
                                users: users
                            });
                            alert('Регистрация прошла успешно');
                            console.log('data reg', data);
                        
                      //  console.log('data', data);
                    })
                    .catch(err => {
                        console.log('err', err);
                    })

            })

    }


    render() {
        return (
            <div>
                <div className='LoginForm' style={styles.LoginComponent}>

                    <form style={styles.LoginEnter}>
                        <div className='enter-form' style={styles.RegisterForm}> Вход</div>
                        <input name='login' placeholder='Логин' style={styles.InputLoginStyle}
                               ref={this.emailRef}
                               onChange={this.onSetState}
                               value={this.props.email}
                               />
                        <input name='password' type='password' placeholder='Пароль' style={styles.InputLoginStyle}
                               ref={this.passwordRef}
                               onChange={this.onSetState}
                               value={this.props.password}
                        />
                        <div className="flex" style={{ width: '300px'}}>
                            <Button type='submit' style={styles.LogInButton}
                                    onClick={this.loginUser}
                            >Вход</Button>
                            <Button type='submit' style={styles.ForgotPassButton}><Link to='/recovery' style={styles.HrefDecoration}>Забыли пароль?</Link></Button>
                        </div>
                    </form>

                    <form className='register-form' style={styles.PageRegister}>
                        <div className='register-form' style={styles.RegisterForm}>Регистрация</div>
                        <div className="flex" style={styles.NamesWrapper}>
                            <input name='firstName'
                                   placeholder='Имя'
                                   ref={this.firstNameRef}
                                   onChange={this.onSetState}
                                   value={this.props.firstName}
                                   style={styles.InputNamesStyle}
                            />
                            <input name='secondName' placeholder='Фамилия'
                                   style={styles.InputSecondNameStyle}
                                   ref={this.secondNameRef}
                                   onChange={this.onSetState}
                                   value={this.props.secondName}
                            />
                        </div>
                        <div className='input-data-wrap' style={styles.InputDataWrap}>
                            <input name='email' placeholder='E-mail'
                                   style={styles.InputLoginStyle}
                                   ref={this.emailRef}
                                   onChange={this.onSetState}
                                   value={this.props.email}
                            />
                            <input name='login' placeholder='Логин'
                                   style={styles.InputLoginStyle}
                                   ref={this.loginRef}
                                   onChange={this.onSetState}
                                   value={this.props.login}
                            />
                            <input name='password' type='password'
                                   placeholder='Пароль'
                                   style={styles.InputLoginStyle}
                                   ref={this.passwordRef}
                                   onChange={this.onSetState}
                                   value={this.props.password}
                            />
                            <input name='repeatPassword' type='password'
                                   style={styles.InputLoginStyle}
                                   onChange={this.onSetState}
                                   value={this.props.repeatPassword}
                                   placeholder='Повторите пароль'/>
                        </div>
                        <br/>
                        <div>
                            <input name='agreement' id='agreement'
                                   type='checkbox'

                            />
                            <label htmlFor='agreement' style={styles.AgreementsStyle}>Я принимаю условия политики и
                                конфиденциальности</label>
                        </div>

                        <br/>
                        <Button type='submit'
                                style={styles.LogInButton}
                                onClick={this.addUser}
                        >Регистрация</Button>
                    </form>
                </div>
            </div>

        );
    }
}
