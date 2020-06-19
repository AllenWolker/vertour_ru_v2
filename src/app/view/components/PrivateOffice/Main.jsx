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
        const {
            aside,
            contentBlock,
            personalData,
            gamesList,
            newGamesList,
            showNewGamesBlock,
            showDeleteAccountBlock,
            addNewGame,
            delGame,
            handleSubmit,
            initialValues
        } = this.props;

        return(
            <MainWrapper>
                <Aside
                    menuPoints={aside.asideMenuPoints}
                />
                <ContentBlock
                    state={contentBlock.state}
                    team={contentBlock.team}
                    rating={contentBlock.rating}
                    gamerImgPath={contentBlock.gamerImgPath}
                    starIconPath={contentBlock.starIconPath}
                    basketIconPath={contentBlock.basketIconPath}
                    addText={contentBlock.addText}
                    hookUpNewGamesBlock={contentBlock.hookUpNewGamesBlock}
                    hookUpDeleteAccountBlock={contentBlock.hookUpDeleteAccountBlock}
                    personalData={personalData}
                    initialValues={initialValues}
                    handleSubmit={handleSubmit}
                    gamesOfPlayer={gamesList.gamesOfPlayer}
                    newGamesList={newGamesList.newGamesList}
                    showNewGamesBlock={showNewGamesBlock}
                    showDeleteAccountBlock={showDeleteAccountBlock}
                    addNewGame={addNewGame}
                    delGame={delGame}
                />
            </MainWrapper>
        )
    }
}