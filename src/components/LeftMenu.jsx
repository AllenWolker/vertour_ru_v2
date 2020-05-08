import React, {Component} from 'react';
import styles from '../styles'
import {Link} from "react-router-dom";

export default class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }
    render() {
        return (
            <div className='leftMenu flex' style={leftMenuStyles.LeftMenuFlex}>
                <div className='account' style={leftMenuStyles.LHrefMenu}>
                    <Link to='/account' style={styles.HrefDecoration}>Учетная запись</Link></div>
                <div className='paymentMethod' style={leftMenuStyles.LHrefMenu}>
                    <Link to='/payment' style={styles.HrefDecoration}> Способ оплаты</Link></div>
                <div className='history' style={leftMenuStyles.LHrefMenu}>
                    <Link to='/history' style={styles.HrefDecoration}> История</Link></div>
                <div className='calendar' style={leftMenuStyles.LHrefMenu}>
                    <Link to='/calendar' style={styles.HrefDecoration}> Календарь</Link></div>
            </div> );
    }
};



//Styles
const  LeftMenuFlex = {
    flexDirection: 'column',
    maxWidth:'300px',
    maxHeight: '900px',
    minHeight:'600px',
    background: 'rgba(0, 0, 0, 0.65)',

};
const LHrefMenu = {
    position: 'relative',
    width: '150px',
    height: '17px',
    marginLeft: '45px',
    marginTop: '40px',
    top: '36px',


    fontFamily: '"Gotham Pro", Serif, Verdana, fantasy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '17px',
};

const leftMenuStyles = {
    LeftMenuFlex:LeftMenuFlex,
    LHrefMenu:LHrefMenu,
}
