import React from 'react';
import styled from 'styled-components';

const GameBlockWrapper = styled.div`
    margin-bottom: 16px;
    width: 600px;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    cursor: pointer;
`;

const NewGameBlock = (props) => {
    const {
        icon,
        title,
        gamesOfPlayer,
        addNewGame
    } = props;

    const addGame = () => {
        let object = {
            title: title,
            icon: icon
        };

        let overlap = false;

        gamesOfPlayer.forEach((item) =>{
            if (item.title === object.title) overlap = !overlap;
        });

       if(!overlap){
           gamesOfPlayer.unshift(object);
           addNewGame(gamesOfPlayer);
       }
    };

    return(
        <GameBlockWrapper>
            <Game icon={icon}>{title}</Game>
            <Btn onClick={addGame}>+ Привязать</Btn>
        </GameBlockWrapper>
    )
};

export default NewGameBlock