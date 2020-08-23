import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Main from '../components/PrivateOffice/Main'
import {
    showDeleteAccountBlock,
    showNewGamesBlock
} from '../../store/actions/ContentBlockActions';

import {
    addNewGame,
    delGame
} from '../../store/actions/GamesListActions';

const Body = styled.div`
    background-image: url(${(props)=>props.imgUrl});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 0 0;
    background-size: cover;
`;

const HeaderWrapper = styled.header`
    background: rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid rgba(196, 196, 196, 0.2);
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const HeaderLogo = styled.div` 
    width: 307px;
    height: 100px;
    background: url(${(props)=>props.headerLogoPath}) no-repeat 35px center;
`;

const HeaderMenuWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 135px;
`;

const HeaderMenu = styled.div`
    flex-grow: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const MenuPoint = styled.div`
    box-sizing: border-box;
    height: 100px;
    padding: 36px 25px 47px;
    margin-right: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    cursor: pointer;
    text-align: center;
    
    :hover {
        background: rgba(67, 67, 67, 0.6);
    }
`;

const UserWrapper = styled.div`
    flex-grow: 1;
    padding-left: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: 10px;
`;

const UserName = styled.div`
    font-size: 18px;
`;

const Bot = styled.div`
    font-size: 16px;
    color: #FFE500;
`;

const UserIcon =styled.div`
    background: url(${props => props.userIconPath}) no-repeat center center;
    width: 50px;
    height: 50px;
`;

class PrivateOffice extends Component{
    render(){
        const {
            contentBlock,
            gamesList,
            newGamesList,
            showNewGamesBlockAction,
            showDeleteAccountBlockAction,
            addNewGameAction,
            delGameAction,
        } = this.props;

        const header = {
            headerMenuPoints: [
                'Главная',
                'PRO',
                'Новости',
                'Поддержка'
            ],

            user: [
                'Creative Tim',
                'bot123'
            ],
        };

        const points = header.headerMenuPoints.map((point, index) => {
            return <MenuPoint key={index}>{point}</MenuPoint>
        });

        return(
            <Body imgUrl={process.env.PUBLIC_URL +'assets/background4.jpg'}>
                <HeaderWrapper>
                    <HeaderLogo headerLogoPath={process.env.PUBLIC_URL + 'assets/vertour-logo.png'}/>
                    <HeaderMenuWrapper>
                        <HeaderMenu>
                            {points}
                        </HeaderMenu>
                        <UserWrapper>
                            <User>
                                <UserName>{header.user[0]}</UserName>
                                <Bot>{header.user[1]}</Bot>
                            </User>
                            <UserIcon userIconPath={process.env.PUBLIC_URL + 'assets/user-logo.png'} />
                        </UserWrapper>
                    </HeaderMenuWrapper>
                </HeaderWrapper>

                <Main
                    contentBlock={contentBlock}
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

const mapStateToProps = (store) => {
    return {
        contentBlock: store.contentBlock,
        gamesList: store.gamesList,
        newGamesList: store.newGamesList
    }
};

const mapDispatchToProps = dispatch => ({
    showNewGamesBlockAction: show => dispatch(showNewGamesBlock(show)),
    showDeleteAccountBlockAction: show => dispatch(showDeleteAccountBlock(show)),
    addNewGameAction: list => dispatch(addNewGame(list)),
    delGameAction: list => dispatch(delGame(list)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateOffice);