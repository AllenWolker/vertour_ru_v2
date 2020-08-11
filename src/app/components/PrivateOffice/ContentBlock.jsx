import React, { Component } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import Status from './Status';
import TeamBlock from './TeamBlock';
import PlaceBlock from './PlaceBlock'
import PersonalData from './PersonalData';
import Gamer from './Gamer';
import AddGame from './AddGame';
import GamesList from './GamesList';
import NewGames from './NewGames';
import DelAccount from './DelAccount';


const ContentBlockWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 307px;
    right: 0;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const ActionBlock = styled.div`
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    width: 994px;
    padding: 40px;
    box-sizing: border-box;
    display: grid;
    grid-column-gap: 60px;
    grid-row-gap: 40px;
    grid-template-areas:
            "status team place gamer"
            "personal_data personal_data personal_data gamer"
            "add_game add_game add_game add_game"
            "games_list games_list games_list games_list"
    ;
`;

const DisplayNoneBlock = styled.div`
    display: none;
`;

export default class ContentBlock extends Component {
    render() {
        const {
            state,
            team,
            rating,
            gamerImgPath,
            starIconPath,
            basketIconPath,
            addText,
            hookUpNewGamesBlock,
            hookUpDeleteAccountBlock,
            personalData,
            handleSubmit,
            gamesOfPlayer,
            newGamesList,
            showNewGamesBlock,
            showDeleteAccountBlock,
            addNewGame,
            delGame,
            initialValues
        } = this.props;

        const PopUpBlock = (props) => {
            if(props.hookUpNewGamesBlock){
                return(
                    <NewGames
                        newGamesList={newGamesList}
                        gamesOfPlayer={gamesOfPlayer}
                        addNewGame={addNewGame}
                    />
                );
            }else{
                if(props.hookUpDeleteAccountBlock){
                    return (
                        <DelAccount
                            showDeleteAccountBlock={showDeleteAccountBlock}
                            hookUpDeleteAccountBlock={hookUpDeleteAccountBlock}
                        />
                    );
                }else {
                    return <DisplayNoneBlock/>
                }
            }
        };

        return(
            <ContentBlockWrapper>
                <ActionBlock>
                    <Status
                        state={state}
                        starIconPath={starIconPath}
                    />

                    <TeamBlock team={team}/>

                    <PlaceBlock rating={rating}/>

                    <Gamer
                        gamerImgPath={gamerImgPath}
                        basketIconPath={basketIconPath}
                        showDeleteAccountBlock={showDeleteAccountBlock}
                        hookUpDeleteAccountBlock={hookUpDeleteAccountBlock}
                        hookUpNewGamesBlock={hookUpNewGamesBlock}
                    />

                    <PersonalData
                        formFields={personalData.formFields}
                        handleSubmit={handleSubmit}
                        initialValues={initialValues}
                    />

                    <AddGame
                        hookUpDeleteAccountBlock={hookUpDeleteAccountBlock}
                        showNewGamesBlock={showNewGamesBlock}
                        hookUpNewGamesBlock={hookUpNewGamesBlock}
                        addText={addText}
                    />

                    <GamesList
                        gamesOfPlayer={gamesOfPlayer}
                        delGame={delGame}
                    />

                    <PopUpBlock
                        hookUpNewGamesBlock={hookUpNewGamesBlock}
                        hookUpDeleteAccountBlock={hookUpDeleteAccountBlock}
                    />

                </ActionBlock>
            </ContentBlockWrapper>
        )
    }
}

ContentBlock.propTypes = {
    state: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    gamerImgPath: PropTypes.string.isRequired,
    basketIconPath: PropTypes.string.isRequired,
    addText: PropTypes.array.isRequired,
    hookUpNewGamesBlock: PropTypes.bool.isRequired,
    hookUpDeleteAccountBlock: PropTypes.bool.isRequired,
    formFields: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        disabled:  PropTypes.bool.isRequired,
        normalize: PropTypes.array.isRequired,
        btnLabel: PropTypes.string.isRequired
    })),
    gamesOfPlayer: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    })),
    newGamesList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    })),
    showNewGamesBlock: PropTypes.func.isRequired,
    showDeleteAccountBlock: PropTypes.func.isRequired,
    addNewGame: PropTypes.func.isRequired,
    delGame: PropTypes.func.isRequired,
    switchOnField: PropTypes.func.isRequired
};