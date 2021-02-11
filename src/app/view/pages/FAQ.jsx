import React, {Component} from 'react';
import styles from '../../../styles'
import {Link} from "react-router-dom";
//import MenuRoute from "../components/MenuRoute";
import Footer from "../components/Footer";
import styled from 'styled-components';

const FAQ = () => {

    return (
        <div>
            <FaqBox>
                <div className='faq flex'>
                    <div className="flex flex-column flex-center" style={{height: '400px', marginLeft: '90px'}}>
                        <FaqTitle>
                            <div className='faq-title'>F A Q</div>
                        </FaqTitle>
                        <styles.RecoveryParagraph>
                            <div className='faq-paragraph' //style={styles.RecoveryParagraph}
                            >Вам нужна помощь? мы всегда на связи и готовы ответить на ваши вопросы
                            </div>
                        </styles.RecoveryParagraph>
                        <SocialNetwork>
                            <div className="social-networks flex flex-center">
                                <styles.HrefFooterRefer>
                                    <a href='#'>
                                        <i className="fab fa-facebook fa-4x" style={{margin: '5px'}}/>
                                    </a>
                                </styles.HrefFooterRefer>
                                <styles.HrefFooterRefer>
                                    <a href='#'>
                                        <i className="fab fa-vk fa-4x" style={{margin: '5px'}}/>
                                    </a>
                                </styles.HrefFooterRefer>
                                <styles.HrefFooterRefer>
                                    <a href='#'>
                                        <i className="fab fa-telegram fa-4x" style={{margin: '5px'}}/>
                                    </a>
                                </styles.HrefFooterRefer>
                            </div>
                        </SocialNetwork>
                    </div>
                    <FaqImg>
                        <div>
                            <img className='faq-img-margin' src={process.env.PUBLIC_URL + "/assets/faqImg.png"} alt="Pubg"/>

                        </div>
                    </FaqImg>
                </div>
            </FaqBox>
            <Footer/>
        </div>


    );
}
export default FAQ;


const FaqBox = styled.div`
        //    position: 'relative',
        width: 670px;
        height: 367px;
        margi-left: 625px;
        margin-top: 165px;
        margin-bottom: 165px;
        background-color: #F0F1F3;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
    `;
const FaqTitle = styled.div`  {
        font-family: Gotham Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 29px;
        color: black;
    `
const SocialNetwork = styled.div` 
        height: 83px;
        width: 247px;
        font-family: Gotham Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 15px;
        color: #FFFFFF;
    `
const FaqImg = styled.div` 
        width: 334px;
        height: 403px;
    `;
