import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background: rgba(0, 0, 0, 0.65);
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 9hw;
    padding-right: 9hw;
    margin-bottom: 16px;
`;

const HeaderLogo = styled.div` 
    width: 202px;
    height: 68px;
    background: url(${(props)=>props.headerLogoPath}) no-repeat 35px center;
`;

const HeaderMenu = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 79px;
`;

const MenuPoint = styled.div`
    box-sizing: border-box;
    height: 100px;
    padding: 36px 25px 47px;
    margin-right: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    cursor: pointer;
    text-align: center;
    
    :hover {
        background: rgba(67, 67, 67, 0.6);
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
`;

const Action = styled.p`
    margin-right: 24px;
`;

const Vl = styled.div`
    width: 24px;
    height: 28px;
    border-left: 1px solid #C4C4C4;
`;

const RegHeader = () => {
    const initialState = {
        headerLogoPath: 'assets/vertour-logo.png',

        headerMenuPoints: [
            'Главная',
            'PRO',
            'Новости',
            'Поддержка'
        ],

        doing: ['Вход', 'Регистрация']
    };

    const points = initialState.headerMenuPoints.map((point, index) => {
        return <MenuPoint key={index}>{point}</MenuPoint>
    });

    return(
        <HeaderWrapper>
            <HeaderLogo
                headerLogoPath={initialState.headerLogoPath}
            />

            <HeaderMenu>{points}</HeaderMenu>

            <Actions>
                <Action>{initialState.doing[0]}</Action>
                <Vl/>
                <Action>{initialState.doing[1]}</Action>
            </Actions>
        </HeaderWrapper>
    )
};

export default RegHeader;