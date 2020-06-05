import React from 'react';
import styled from 'styled-components';

const BlockWrapper = styled.div`
    width: 342px;
    height: 146px;
    background: #FFFFFF;
    color: #000000;
    text-align: center;
    border-radius: 15px 0 15px 15px;
    position: absolute;
    left: 550px;
    top: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    opacity: 0; 
    transition: .3s;
    animation: show 1s 1;
    animation-fill-mode: forwards;
    animation-delay: .1s;
    
    @keyframes show{
        0%{
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }
`;

const Question = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 17px;
    margin-bottom: 24px;
`;

const BtnBlock = styled.div`
    width: 202px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Btn = styled.button`
    width: 66px;
    height: 37px;
    background: #840318;
    border-radius: 10px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    
    :focus {
        outline: none !important
    }
`;

const DelAccount = (props) => {
    const {
        showDeleteAccountBlock,
        hookUpDeleteAccountBlock
    } = props;

    const showBlock = () =>{
        if(hookUpDeleteAccountBlock) {
            showDeleteAccountBlock(!hookUpDeleteAccountBlock);
        }else{
            showDeleteAccountBlock(hookUpDeleteAccountBlock);
        }
    };

    return(
        <BlockWrapper>
            <Question>
                Вы действительно хотите<br/>
                удалить аккаунт?
            </Question>
            <BtnBlock>
                <Btn value='yes'>да</Btn>
                <Btn value='no' onClick={showBlock}>нет</Btn>
            </BtnBlock>
        </BlockWrapper>
    )
};

export default DelAccount;