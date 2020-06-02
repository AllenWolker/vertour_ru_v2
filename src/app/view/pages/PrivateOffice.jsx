import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main'

const Body = styled.div`
    background-image: url(${(props)=>props.imgUrl});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 0 0;
    background-size: cover;
`;

class PrivateOffice extends Component{
    render(){
        return(
            <Body imgUrl={process.env.PUBLIC_URL +'assets/background4.jpg'}>
                <Header />
                <Main />
            </Body>
        )
    }
}

export default PrivateOffice