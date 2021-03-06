import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import RegHeader from '../../components/Registration/RegHeader';
//import Footer from '../components/Footer';
import RegForm from "../../components/Registration/RegForm";
import LoginForm from "../../components/Registration/LoginForm";

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
    box-sizing: border-box;
    top: 0;
    right: 20vw;
    background: #FFFFFF;
    opacity: 0.9;
    border-radius: 10px;
    padding: 32px 114px 32px 121px;
`;

const Registration =(props) => {
    const { token } = props;
    console.log('token',token);


    if(token) {
        return <Redirect to={'/private_office'}/>
    } else {
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

};

export default Registration;
