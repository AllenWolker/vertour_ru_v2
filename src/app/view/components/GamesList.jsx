import React from 'react';
import styled from 'styled-components';

import GameBlock from './GamesBlock';

const BlockWrapper = styled.div`
    grid-area: games_list;
    height: 200px;
    overflow: auto;
    
    ::-webkit-scrollbar-track {
        background-color: #6D6D6D;
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


const GamesList = (props) => {
    const {
        gamesOfPlayer,
        delGame
    } = props;

    const games = gamesOfPlayer.map((game, index) => {
        return (
            <GameBlock
                key={index}
                icon={process.env.PUBLIC_URL + game.icon}
                title={game.title}
                gamesOfPlayer={gamesOfPlayer}
                delGame={delGame}
            />
        )
    });

    return <BlockWrapper>{games}</BlockWrapper>
};

export default GamesList;