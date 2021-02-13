import React from 'react';
import styles from '../../../styles'
import {Link} from "react-router-dom";

const Footer = () => {
        return (

            <styles.FooterStyle>
                <div className="footer">
                    <div className="companyLogo">
                        <styles.HrefDecoration>
                            <a href='/'>
                                <styles.VertourFooterLogo>
                                    <img src={process.env.PUBLIC_URL + "/assets/vertour-logo.png"} alt="JScorp"/>
                                </styles.VertourFooterLogo>
                            </a>
                        </styles.HrefDecoration>
                    </div>
                    <div className='footerMenu' style={{display: 'flex'}}>
                        <styles.InformationMenu>
                            <div className="information-menu">
                                <styles.TitleFontFooter>
                                    <div>Информация</div>
                                </styles.TitleFontFooter>

                                <div className='main-page'>
                                    <styles.HrefDecoration>
                                        <a href='/'>Главная</a>
                                    </styles.HrefDecoration>
                                </div>
                                <div className='pro'>
                                    <styles.HrefDecoration>
                                        <a href='/'>PRO</a>
                                    </styles.HrefDecoration>
                                </div>
                            </div>
                        </styles.InformationMenu>
                        <styles.NewsMenu>
                            <div className="news-menu">
                                <styles.TitleFontFooter>
                                    <div>Новости</div>
                                </styles.TitleFontFooter>

                                <div className='support' style={{paddingBottom: '12px'}}>
                                    <styles.HrefDecoration>
                                        <a href='/'>Поддержка</a>
                                    </styles.HrefDecoration>
                                </div>
                                <div className='contacts' style={{paddingBottom: '12px'}}>
                                    <styles.HrefDecoration>
                                        <a href='/'>Контакты</a>
                                    </styles.HrefDecoration>
                                </div>
                            </div>
                        </styles.NewsMenu>
                    </div>
                    <styles.PaymentMethod>
                        <div className="payment-method">
                            <div>Способы оплаты</div>
                            <div>
                                <styles.HrefFooterRefer>
                                    <a href='/visa' //style={styles.HrefFooterRefer}
                                    ><i className="fab fa-cc-visa fa-2x" style={{margin: '5px'}}/></a>
                                </styles.HrefFooterRefer>
                                <styles.HrefFooterRefer>
                                    <a href='/mastercard' //style={styles.HrefFooterRefer}
                                    ><i className="fab fa-cc-mastercard fa-2x" style={{margin: '5px'}}/></a>
                                </styles.HrefFooterRefer>
                            </div>
                        </div>
                    </styles.PaymentMethod>
                    <styles.SocialNetwork>
                        <div className="social-networks">
                            <div>Следите за нами</div>
                            <styles.HrefFooterRefer>
                                <a href='/FB'
                                ><i className="fab fa-facebook fa-2x" style={{margin: '5px'}}/></a>
                            </styles.HrefFooterRefer>
                            <styles.HrefFooterRefer>
                                <a href='/VK'
                                > <i className="fab fa-vk fa-2x" style={{margin: '5px'}}/></a>
                            </styles.HrefFooterRefer>
                            <styles.HrefFooterRefer>
                                <a href='/telegram'
                                ><i className="fab fa-telegram fa-2x" style={{margin: '5px'}}/></a>
                            </styles.HrefFooterRefer>

                        </div>
                    </styles.SocialNetwork>

                    <div className="bottom-footer" style={{display: 'flex'}}>
                        <styles.Copyright>
                            <div className="copyright">&copy; 2019 vertour LLC. Все права защищены</div>
                        </styles.Copyright>
                        <styles.ConfidentialPolitics>
                            <div className="confidential-politic"
                            >
                                <div className='politic'>
                                    <styles.HrefFooter>
                                        <a href='/confidential' //style={styles.HrefFooter}
                                        >Политика конфиденциальности</a>
                                    </styles.HrefFooter>
                                </div>
                                <div className='terms-use'>
                                    <styles.HrefFooter>
                                        <a href='/terms_use' //style={styles.HrefFooter}
                                        >Условия использования</a>
                                    </styles.HrefFooter>
                                </div>
                            </div>
                        </styles.ConfidentialPolitics>
                        <styles.ReferenceFooterCompany>
                            <div className="referents-company">Разработано
                                <styles.HrefFooterRefer>
                                    <a href='/jscorp'> JS Corporation</a>
                                </styles.HrefFooterRefer>
                            </div>
                        </styles.ReferenceFooterCompany>

                    </div>

                </div>
            </styles.FooterStyle>

        )
}
export default Footer;



