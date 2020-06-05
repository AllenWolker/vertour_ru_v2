import React from 'react';
import styled from 'styled-components';

const GameBlockWrapper = styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 750px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
`;

const Game = styled.div`
    ::before {
        content: url(${props => props.icon});
        margin-right: 40px;
        vertical-align: -190%;
    }
`;

const Btn = styled.div`
    width: 200px;
    height: 50px;
    background: #840318;
    color: #FFFFFF;
    border-radius: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer
`;

const GameBlock = (props) => {
    const{
        title,
        icon,
        gamesOfPlayer,
        delGame
    } = props;

    const removeGame = () => {
        delGame(gamesOfPlayer.filter(item => item.title !== title));
    };

    return(
        <GameBlockWrapper>
            <Game icon={icon}>{title}</Game>
            <Btn onClick={removeGame}>- Отвязать</Btn>
        </GameBlockWrapper>
    )
};

export default GameBlock;