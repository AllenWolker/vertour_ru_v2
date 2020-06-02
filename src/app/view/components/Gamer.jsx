import React from 'react';
import styled from 'styled-components';

const BlockWrapper = styled.div`
    grid-area: gamer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`;

const GamerIcon = styled.div`
    content: url(${props => props.gamerImgPath});
    margin-bottom: 25px;
`;

const DelAcc = styled.div`
    ::after {
        content: url(${props => props.basketIconPath});
        display: inline-block;
        margin-left: 16px;
        vertical-align: -40%;
        cursor: pointer;
    }
`;

const Gamer = (props) => {
    const {
        gamerImgPath,
        basketIconPath,
        showDeleteAccountBlock,
        showDelBlock
    } = props;

    const showBlock = () =>{
        if(!showDeleteAccountBlock) {
            showDelBlock(!showDeleteAccountBlock);
        }else{
            showDelBlock(showDeleteAccountBlock);
        }
    };

    return(
        <BlockWrapper>
            <GamerIcon
                gamerImgPath={process.env.PUBLIC_URL + gamerImgPath}
            />
            <DelAcc
                onClick={showBlock}
                basketIconPath={process.env.PUBLIC_URL + basketIconPath}>
                Удалить аккаунт
            </DelAcc>
        </BlockWrapper>
    )
};

export default Gamer;