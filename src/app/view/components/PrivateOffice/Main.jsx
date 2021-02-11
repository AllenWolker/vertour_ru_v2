import React, { Component } from 'react';
import styled from 'styled-components';
import ContentBlock from './ContentBlock';

const MainWrapper = styled.div`
    min-height: 1000px;
    height: 100%;
    position: relative;
`;

const AsideWrapper = styled.div`
    background: rgba(0, 0, 0, 0.6);
    border-right: 1px solid rgba(196, 196, 196, 0.2);
    position: absolute;
    top: 0;
    bottom: 0;
    width: 307px;
`;

const Sidebar = styled.ul`
    margin-left: 0;
    padding-left: 0;
    margin-top: 64px;
`;

const SidebarLi = styled.li`
    height: 42px;
    box-sizing: border-box;
    margin-bottom: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    line-height: 16px;
    cursor: pointer;
    
    :hover {
    background: rgba(37, 35, 35, 0.5);
    text-decoration: none;
  }
`;


export default class Main extends Component {

    render() {
        const {
            contentBlock,
            gamesList,
            newGamesList,
            showNewGamesBlock,
            showDeleteAccountBlock,
            addNewGame,
            delGame,
        } = this.props;

        const menuPoints = [
            'Учетная запись',
            'Способы оплаты',
            'История',
            'Календарь'
        ];

        const points = menuPoints.map((point, index) => {
            return <SidebarLi key={index}>{point}</SidebarLi>
        });

        return(
            <MainWrapper>
                <AsideWrapper>
                    <Sidebar>{points}</Sidebar>
                </AsideWrapper>

                <ContentBlock
                    hookUpNewGamesBlock={contentBlock.hookUpNewGamesBlock}
                    hookUpDeleteAccountBlock={contentBlock.hookUpDeleteAccountBlock}
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