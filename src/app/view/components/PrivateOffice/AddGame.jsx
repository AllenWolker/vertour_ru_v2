import React from 'react';
import styled from 'styled-components';

const AddGameWrapper = styled.div`
    grid-area: add_game;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;
`;

const Games = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 23px;
`;

const Add = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    cursor: pointer;
    z-index: 999;
    display: ${props => props.hookUpDeleteAccountBlock ? 'none' : 'block'};
    transition: 1.2s;
    webkit-transition: 1.2s;
`;

const AddGame = (props) => {
    const {
        hookUpDeleteAccountBlock,
        hookUpNewGamesBlock,
        showNewGamesBlock,
        addText
    } = props;

    const showBlock = () =>{
        showNewGamesBlock(!hookUpNewGamesBlock);
    };

    const text = hookUpNewGamesBlock ? addText[1] : addText[0];

    return(
        <AddGameWrapper>
            <Games>Игры</Games>
            <Add
                hookUpDeleteAccountBlock={hookUpDeleteAccountBlock}
                onClick={showBlock}>{text}</Add>
        </AddGameWrapper>
    )
};

export default AddGame;