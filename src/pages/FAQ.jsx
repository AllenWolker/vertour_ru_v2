import React, {Component} from 'react';
import styles from '../styles'
import {Link} from "react-router-dom";
import MenuRoute from "../components/MenuRoute";
import Footer from "../components/Footer";

export default class FAQ extends Component {
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
                <div className='faq flex' style={styless.faqBox}>
                    <div className="flex flex-column flex-center" style={styless.margin}>
                        <div className='faq-title' style={styless.faqTitle}>F A Q</div>
                        <div className='faq-paragraph' style={styles.RecoveryParagraph}>Вам нужна помощь? мы всегда на связи и готовы ответить на ваши вопросы</div>
                        <div className="social-networks flex flex-center" style={styless.SocialNetwork}>
                            <Link to='/FB' style={styles.HrefFooterRefer}>
                                <i className="fab fa-facebook fa-4x"
                                   style={{margin: '5px'}}/>
                            </Link>
                            <Link to='/VK' style={styles.HrefFooterRefer}>
                                <i className="fab fa-vk fa-4x"
                                   style={{margin: '5px'}}/>
                            </Link>
                            <Link to='/telegram' style={styles.HrefFooterRefer}>
                                <i className="fab fa-telegram fa-4x"
                                   style={{margin: '5px'}}/>
                            </Link>
                        </div>
                    </div>

                    <img className='faq-img-margin' style={styless.faqImg} src="/assets/faqImg.png" alt="Pubg"/>
                </div>
                <Footer/>
            </div>


        );
    }
}
const styless = {

    faqBox: {

        //    position: 'relative',
        width: '670px',
        height: '367px',
        marginLeft: '625px',
        marginTop: '165px',
        marginBottom: '165px',
        backgroundColor: '#F0F1F3',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
    },
    faqTitle: {
        fontFamily: 'Gotham Pro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '29px',
        color: 'black',
    },
    SocialNetwork: {
        height: '83px',
        width: '247px',
        fontFamily: 'Gotham Pro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '15px',
        color: '#FFFFFF',
    },
    faqImg: {
        width: ' 334px',
        height: '403px',
    },
    margin:{
        height: '400px',
      marginLeft: '90px',
    },
};
