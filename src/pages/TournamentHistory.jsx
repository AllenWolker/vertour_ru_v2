import React, {Component} from 'react';
import styles from '../styles'
import LeftMenu from "../components/LeftMenu";
import {Link} from "react-router-dom";
import MenuRoute from "../components/MenuRoute";
import Footer from "../components/Footer";

export default class TournamentHistory extends Component {
    state = {
        tournName: 'Masters Tournament Season 2',
        tournCreator: 'Vertour',
        firstPlayerName: 'Crex',
        secondPlayerName: 'Pex',
        tournDate: "01.01.2020",
        tournScore: '1:0'

    };

    render() {
        return (
            <div style={styles.ContainerLogin}>
                <MenuRoute/>
                <div className='flex'>
                    <LeftMenu/>
                    <div className="tournamentPage-box flex-column" style={TournamentHistoryStyles.TournamentPageBox}>
                        <div className="tournamentBox flex" style={TournamentHistoryStyles.TournamentBox}>
                            <div className="tournImg" style={TournamentHistoryStyles.LogoTourn}/>
                            <div className="tournName"
                                 style={TournamentHistoryStyles.TournamentDecoration}>{this.state.tournName}</div>
                            <div className="tournCreator"
                                 style={TournamentHistoryStyles.TournamentDecoration}>{this.state.tournCreator}</div>
                            <div className="playerBox flex">
                                <div className="firstPlayerName"
                                     style={TournamentHistoryStyles.TournamentDecoration}>{this.state.firstPlayerName}</div>
                                <div className="firstPlayerImg" style={TournamentHistoryStyles.PlayerImg}/>
                            </div>
                            <div className="vs" style={TournamentHistoryStyles.TournamentDecoration}>VS</div>
                            <div className="playerBox flex">
                                <div className="secondPlayerName"
                                     style={TournamentHistoryStyles.TournamentDecoration}>{this.state.secondPlayerName}</div>
                                <div className="secondPlayerImg" style={TournamentHistoryStyles.PlayerImg}/>
                            </div>
                            <div className="tournDate"
                                 style={TournamentHistoryStyles.TournamentDecoration}>{this.state.tournDate}</div>
                            <div className="tournScore"
                                 style={TournamentHistoryStyles.TournamentDecoration}>{this.state.tournScore}</div>
                        </div>
                        <div className="tournamentBox flex" style={TournamentHistoryStyles.TournamentBox}>
                            <div className="tournImg" style={TournamentHistoryStyles.LogoTourn}/>
                            <div className="tournName"
                                 style={TournamentHistoryStyles.TournamentDecoration}>{this.state.tournName}</div>
                            <div className="tournCreator"
                                 style={TournamentHistoryStyles.TournamentDecoration}>{this.state.tournCreator}</div>
                            <div className="playerBox flex">
                                <div className="firstPlayerName"
                                     style={TournamentHistoryStyles.TournamentDecoration}>{this.state.firstPlayerName}</div>
                                <div className="firstPlayerImg" style={TournamentHistoryStyles.PlayerImg}/>
                            </div>
                            <div className="vs" style={TournamentHistoryStyles.TournamentDecoration}>VS</div>
                            <div className="playerBox flex">
                                <div className="secondPlayerName"
                                     style={TournamentHistoryStyles.TournamentDecoration}>{this.state.secondPlayerName}</div>
                                <div className="secondPlayerImg" style={TournamentHistoryStyles.PlayerImg}/>
                            </div>
                            <div className="tournDate"
                                 style={TournamentHistoryStyles.TournamentDecoration}>{this.state.tournDate}</div>
                            <div className="tournScore"
                                 style={TournamentHistoryStyles.TournamentDecoration}>{this.state.tournScore}</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
};


//Style
const TournamentPageBox = {
    width: '960px',
    height: '600px',
    marginTop: '1%',
    marginLeft: '15%',
    background: 'rgba(0, 0, 0, 0.65)',
    marginBottom: '90px',

};
const TournamentBox = {
    width: '960px',
    height: '50px',
    background: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'space-around',
    marginTop: '2px',
    alignItems: 'flex-end',
};
const LogoTourn = {
    width: '52px',
    height: '24px',
    backgroundImage: 'url("/assets/tournament_img/tournLogo.png")',
    backgroundRepeat: 'no-repeat',
    marginBottom: '15px',
};
const PlayerImg = Object.assign({}, LogoTourn);
PlayerImg.marginBottom = '0px';
PlayerImg.marginLeft = '5px';

const TournamentDecoration = Object.assign({}, styles.HrefDecoration);
TournamentDecoration.fontSize = '16px';
TournamentDecoration.marginBottom = '20px';
const TournamentHistoryStyles = {
    TournamentPageBox: TournamentPageBox,
    LogoTourn: LogoTourn,
    TournamentDecoration: TournamentDecoration,
    TournamentBox: TournamentBox,
    PlayerImg: PlayerImg,

};
