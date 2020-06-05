import React from 'react';
import styled from 'styled-components';

import NewGameBlock from './NewGameBlock';

const BlockWrapper = styled.div`
    position: absolute;
    width: 700px;
    height: 305px;
    left: 310px;
    top: 490px;
    background: #FFFFFF;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 32px 20px 16px 40px;
    
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

const GamesList = styled.div`
    overflow: auto;
    height: 257px;
    
    ::-webkit-scrollbar-track {
        background-color: #E4E4E4;
        box-shadow:0 0 3px #000 inset;
        border-radius: 50px;
    }
    
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        background-color: rgba(37, 35, 35, 0.5);
        background-image: url('https://yraaa.ru/_pu/24/59610063.png');
        background-position: center;
        background-repeat: no-repeat;
    }
    
    ::-webkit-resizer{
        width: 7px;
        height: 0;
    }
    
    ::-webkit-scrollbar{
        width: 11px;
    }
`;

const NewGames = (props) => {
    const {
        newGamesList,
        showNewGamesBlock,
        gamesOfPlayer,
        addNewGame
    } = props;


    const games = newGamesList.map((game, index) => {
        return (
            <NewGameBlock
                key={index}
                icon={process.env.PUBLIC_URL + game.icon}
                title={game.title}
                gamesOfPlayer={gamesOfPlayer}
                addNewGame={addNewGame}
            />
        )
    });

    return (
        <BlockWrapper showNewGamesBlock={showNewGamesBlock}>
            <GamesList>{games}</GamesList>
        </BlockWrapper>
    )
};

export default NewGames;