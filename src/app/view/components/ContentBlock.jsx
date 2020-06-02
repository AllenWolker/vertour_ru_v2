import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { validate } from "../../utils/formControl/formValidate";
import styled from 'styled-components';

import Status from './Status';
import TeamBlock from './TeamBlock';
import PlaceBlock from './PlaceBlock'
import PersonalData from './PersonalData';
import Gamer from './Gamer';
import AddGame from './AddGame';
import GamesList from './GamesList';
import NewGames from './NewGames';
import DelAccount from './DelAccount';

import {
    showNewGamesBlock,
    showDeleteAccountBlock,
    addNewGame,
    delGame
} from '../../actions/ContentBlockActions'

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

class ContentBlock extends Component {
    render() {
        const {
            state,
            team,
            rating,
            gamerImgPath,
            starIconPath,
            basketIconPath,
            addText,
            showNewGamesBlock,
            showDeleteAccountBlock,
            gamesOfPlayer,
            newGamesList,
            formFields,
        } = this.props.contentBlock;
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
                        showDelBlock={this.props.showDeleteAccountBlockAction}
                    />

                    <PersonalData formFields={formFields}/>

                    <AddGame
                        showNewGamesBlock={showNewGamesBlock}
                        showDeleteAccountBlock={showDeleteAccountBlock}
                        showGamesBlock={this.props.showNewGamesBlockAction}
                        addText={addText}
                    />

                    <GamesList
                        gamesOfPlayer={gamesOfPlayer}
                        delGame={this.props.delGameAction}
                    />

                    <NewGames
                        showNewGamesBlock={showNewGamesBlock}
                        newGamesList={newGamesList}
                        gamesOfPlayer={gamesOfPlayer}
                        addNewGame={this.props.addNewGameAction}
                    />

                    <DelAccount
                        showDeleteAccountBlock={showDeleteAccountBlock}
                        showDelBlock={this.props.showDeleteAccountBlockAction}
                    />
                </ActionBlock>
            </ContentBlockWrapper>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        contentBlock: store.contentBlock,
        form: ownProps.formName
    }
};


const mapDispatchToProps = dispatch => ({
    showNewGamesBlockAction: show => dispatch(showNewGamesBlock(show)),
    showDeleteAccountBlockAction: show => dispatch(showDeleteAccountBlock(show)),
    addNewGameAction: list => dispatch(addNewGame(list)),
    delGameAction: list => dispatch(delGame(list))
});

export default compose(
    connect(mapStateToProps,
        mapDispatchToProps
        ),
    reduxForm({
        validate
    })
)(ContentBlock);