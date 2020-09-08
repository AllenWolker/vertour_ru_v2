import React, {Component} from 'react';
import styles from '../../../styles';
import {Link} from "react-router-dom";
import styled from 'styled-components';

export default class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    render() {
        return (
            <div className='leftMenu flex ' style={leftMenuStyles.LeftMenuFlex}>
                <div className='account flex flex-center' style={leftMenuStyles.LHrefMenu}>
                        <Link to='/account ' style={leftMenuStyles.LHrefDecoration}>Учетная запись</Link></div>
                <div className='paymentMethod flex flex-center' style={leftMenuStyles.LHrefMenu}>
                    <Link to='/payment_methods' style={leftMenuStyles.LHrefDecoration}><p>Способ оплаты</p> </Link></div>
                <div className='history flex flex-center' style={leftMenuStyles.LHrefMenu}>
                    <Link to='/tournament_history' style={leftMenuStyles.LHrefDecoration}> История</Link></div>
                <div className='calendar flex flex-center' style={leftMenuStyles.LHrefMenu}>
                    <Link to='/calendar' style={leftMenuStyles.LHrefDecoration}> Календарь</Link></div>
            </div>);
    }
};


//Styles
const LeftMenuFlex = styled.div`
    flexDirection: column;
    maxWidth: 300px;
    maxHeight: 900px;
    minHeight: 600px;
    background: rgba(0, 0, 0, 0.65);
`;

const LHrefMenu = styled.div`
    position: relative;
    width: 150px;
    height: 40px;
    marginLeft: 45px;
    marginTop: 40px;
    top: 36px;
`;

const LHrefDecoration = Object.assign({}, styles.HrefDecoration);
LHrefDecoration.fontSize = '16px';

const leftMenuStyles = {
    LeftMenuFlex: LeftMenuFlex,
    LHrefMenu: LHrefMenu,
    LHrefDecoration: LHrefDecoration
}
