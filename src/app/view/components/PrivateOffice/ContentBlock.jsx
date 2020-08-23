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

import submit from '../../../utils/submit/userDataSubmit';
import normalizePhone from "../../../utils/formControl/normalizePhone";


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
            hookUpNewGamesBlock,
            hookUpDeleteAccountBlock,
            gamesOfPlayer,
            newGamesList,
            showNewGamesBlock,
            showDeleteAccountBlock,
            addNewGame,
            delGame,
        } = this.props;

        const contentBlock = {
            state: 'Профи',
            team: 'qwerty',
            rating: 3,
            gamerImgPath: 'assets/gamer1.png',
            starIconPath: 'assets/star-icon.png',
            basketIconPath: 'assets/basket-icon.png',
            addText: [
                '+ Добавить игру',
                'Закрыть'
            ]
        };

        const personalData = {
            formName: 'gamerData',
            formFields: [
                {
                    name: 'email',
                    label: 'Почта',
                    type: 'email',
                    normalize: [],
                    btnLabel: 'Изменить'
                },

                {
                    name: 'phone',
                    label: 'Телефон',
                    type: 'tel',
                    normalize: [normalizePhone],
                    btnLabel: 'Изменить'
                },

                {
                    name: 'password',
                    label: 'Пароль',
                    type: 'password',
                    normalize: [],
                    btnLabel: 'Изменить'
                },

                {
                    name: 'payment',
                    label: 'Кошелек Vertour',
                    type: 'text',
                    normalize: [],
                    btnLabel: 'Способы оплаты'
                }
            ]
        };

        const handleSubmit = (values) => submit(values);

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
                        state={contentBlock.state}
                        starIconPath={contentBlock.starIconPath}
                    />

                    <TeamBlock team={contentBlock.team}/>

                    <PlaceBlock rating={contentBlock.rating}/>

                    <Gamer
                        gamerImgPath={contentBlock.gamerImgPath}
                        basketIconPath={contentBlock.basketIconPath}
                        showDeleteAccountBlock={contentBlock.showDeleteAccountBlock}
                        hookUpDeleteAccountBlock={hookUpDeleteAccountBlock}
                        hookUpNewGamesBlock={hookUpNewGamesBlock}
                    />

                    <PersonalData
                        formFields={personalData.formFields}
                        formName={personalData.formName}
                        handleSubmit={handleSubmit}
                    />

                    <AddGame
                        hookUpDeleteAccountBlock={hookUpDeleteAccountBlock}
                        showNewGamesBlock={showNewGamesBlock}
                        hookUpNewGamesBlock={hookUpNewGamesBlock}
                        addText={contentBlock.addText}
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
    hookUpNewGamesBlock: PropTypes.bool.isRequired,
    hookUpDeleteAccountBlock: PropTypes.bool.isRequired,
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