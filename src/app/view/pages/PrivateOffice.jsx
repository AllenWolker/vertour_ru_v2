import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { validate } from "../../utils/formControl/formValidate";

import Header from '../components/Header';
import Main from '../components/Main'
import {
    showDeleteAccountBlock,
    showNewGamesBlock
} from '../../actions/ContentBlockActions';

import {
    addNewGame,
    delGame
} from '../../actions/GamesListActions';

const Body = styled.div`
    background-image: url(${(props)=>props.imgUrl});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 0 0;
    background-size: cover;
`;

class PrivateOffice extends Component{
    render(){
        const {
            headerMenu,
            aside,
            contentBlock,
            personalData,
            gamesList,
            newGamesList,
            showNewGamesBlockAction,
            showDeleteAccountBlockAction,
            addNewGameAction,
            delGameAction
        } = this.props;

        return(
            <Body imgUrl={process.env.PUBLIC_URL +'assets/background4.jpg'}>
                <Header
                    headerMenu={headerMenu}
                />
                <Main
                    aside={aside}
                    contentBlock={contentBlock}
                    personalData={personalData}
                    gamesList={gamesList}
                    newGamesList={newGamesList}
                    showNewGamesBlock={showNewGamesBlockAction}
                    showDeleteAccountBlock={showDeleteAccountBlockAction}
                    addNewGame={addNewGameAction}
                    delGame={delGameAction}
                />
            </Body>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        form: ownProps.formName,
        headerMenu: store.headerMenu,
        aside: store.aside,
        contentBlock: store.contentBlock,
        personalData: store.personalData,
        gamesList: store.gamesList,
        newGamesList: store.newGamesList
    }
};

const mapDispatchToProps = dispatch => ({
    showNewGamesBlockAction: show => dispatch(showNewGamesBlock(show)),
    showDeleteAccountBlockAction: show => dispatch(showDeleteAccountBlock(show)),
    addNewGameAction: list => dispatch(addNewGame(list)),
    delGameAction: list => dispatch(delGame(list))
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm({
        validate
    })
)(PrivateOffice);