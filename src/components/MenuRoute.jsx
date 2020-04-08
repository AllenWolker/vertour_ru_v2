import React, {Component} from 'react';
import {Link} from "react-router-dom";
//import {Menu} from 'semantic-ui-react'
import styles from '../styles'

export default class MenuRoute extends Component {
    render() {
        return (
            <div className="MenuRoute" style={styles.MenuStyleRoute}>
                <img className='menuLogo' src="/assets/vertour-logo.png" alt="Logo" style={styles.MenuLogoImg}/>
                <div className='main-page' style={styles.MenuComponents}>
                    <Link to='/' style={styles.HrefDecoration}>Главная</Link></div>
                <div className='pro' style={styles.MenuComponents}>
                    <Link to='/pro' style={styles.HrefDecoration}> PRO</Link></div>
                <div className='news' style={styles.MenuComponents}>
                    <Link to='/news' style={styles.HrefDecoration}> Новости</Link></div>
                <div className='faq' style={styles.MenuComponents}>
                    <Link to='/faq' style={styles.HrefDecoration}> FAQ</Link></div>
                <div className='login' style={styles.LoginComponents}>
                    <Link to='/login' style={styles.HrefDecoration}> Вход</Link></div>
            </div>
        )
    }
}
