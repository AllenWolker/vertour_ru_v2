import React, {Component} from 'react';
import styles from '../../../../styles'
import {Link} from "react-router-dom";
import MenuRoute from "../../components/MenuRoute";
import Footer from "../../components/Footer";

export default class NewsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    render() {
        return (
            <div style={styles.ContainerLogin}>
                <MenuRoute/>
                <div className='news-page' style={styles.MainRecoveryDiv}>
                    <div className="cyber-news">
                        <div className="news-profile">
                            <img src="" alt=""/>
                            <div className="title-news">Стань одним из профессиональных киберспортсменов</div>
                            <div className="text-news">Участвуйте в наших турнирах, зарабатывайте на победах,
                                а также получите возможность стать про и подписать контракт с нашим партнером
                            </div>
                            <button>Участвовать</button>
                        </div>
                        <div className="news-lents">
                        </div>
                    </div>
                    <div className="glory-hall">
                        <div className="glory-img"></div>
                        <div className="glory-name">Имя: Виталий</div>
                        <div className="glory-team"> Команда: Tiny</div>
                        <div className="glory-win"> Количество побед: 21</div>
                        <button>Стать одним из нас</button>
                    </div>

                </div>
                <Footer/>
            </div>

        );
    }
}

