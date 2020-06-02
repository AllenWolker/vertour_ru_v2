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
    opacity: ${props => props.showDeleteAccountBlock ? 0 : 1};
    transition: 1.2s;
    webkit-transition: 1.2s;
`;

const AddGame = (props) => {
    const {
        showNewGamesBlock,
        showDeleteAccountBlock,
        showGamesBlock,
        addText
    } = props;

    const showBlock = () =>{
        showGamesBlock(!showNewGamesBlock);
    };

    const text = showNewGamesBlock ? addText[1] : addText[0];

    return(
        <AddGameWrapper>
            <Games>Игры</Games>
            <Add
                showDeleteAccountBlock={showDeleteAccountBlock}
                onClick={showBlock}>{text}</Add>
        </AddGameWrapper>
    )
};

export default AddGame;