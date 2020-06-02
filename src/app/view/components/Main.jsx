import React, { Component } from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import ContentBlock from './ContentBlock';

const MainWrapper = styled.div`
    min-height: 1000px;
    height: 100%;
    position: relative;
`;

export default class Main extends Component {
    render() {
        return(
            <MainWrapper>
                <Aside/>
                <ContentBlock/>
            </MainWrapper>
        )
    }
}