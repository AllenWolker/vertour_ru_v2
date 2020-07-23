import React, { Component } from 'react';
import styled from 'styled-components';

import RegHeader from '../components/Registration/RegHeader';
//import Footer from '../components/Registration/Footer';
import RegForm from "../components/Registration/RegForm";
import LoginForm from "../components/Registration/LoginForm";

const RegBody = styled.div`
    background-image: url(${(props)=>props.imgUrl});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 0 0;
    background-size: cover;
    width: 100%;
    height: 1080px;
`;

const FormsWrapper = styled.div`
    position: absolute;
    width: 540px;
    height: auto;
    box-sizing: border-box;.
    top: 0;
    right: 20vw;
    background: #FFFFFF;
    opacity: 0.9;
    border-radius: 10px;
    padding: 32px 114px 32px 121px;
`;

export default class Registration extends Component {
    render() {
        return(
            <RegBody
                imgUrl={process.env.PUBLIC_URL +'assets/reg-background.jpg'}
            >
                <RegHeader/>
                <FormsWrapper>
                    <RegForm/>
                    <LoginForm/>
                </FormsWrapper>
            </RegBody>
        )
    }
}