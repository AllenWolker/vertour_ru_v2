import React, {Component} from 'react';
import styles from '../../../styles'
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer" style={styles.FooterStyle}>
                <div className="companyLogo">
                    <Link to='/' style={styles.HrefDecoration}>
                    <img src={process.env.PUBLIC_URL + "/assets/vertour-logo.png"} alt="JScorp"
                         style={styles.VertourFooterLogo}/>
                    </Link>
                </div>
                <div className='footerMenu' style={{display: 'flex'}}>
                    <div className="information-menu" style={styles.InformationMenu}>
                        <div style={styles.TitleFontFooter}>Информация</div>
                        <div className='main-page'>
                            <Link to='/' style={styles.HrefDecoration}>Главная</Link>
                        </div>
                        <div className='pro'>
                            <Link to='/pro' style={styles.HrefDecoration}>PRO</Link>
                        </div>
                    </div>
                    <div className="news-menu" style={styles.NewsMenu}>
                        <div style={styles.TitleFontFooter}>Новости</div>
                        <div className='support' style={{paddingBottom: '12px'}}>
                            <Link to='/support' style={styles.HrefDecoration}>Поддержка</Link>
                        </div>
                        <div className='contacts' style={{paddingBottom: '12px'}}>
                            <Link to='/contacts' style={styles.HrefDecoration}>Контакты</Link>
                        </div>
                    </div>
                </div>
                <div className="payment-method" style={styles.PaymentMethod}>
                    <div>Способы оплаты</div>
                    <div >
                        <Link to='/visa' style={styles.HrefFooterRefer}><i className="fab fa-cc-visa fa-2x" style={{margin: '5px'}}/></Link>
                        <Link to='/mastercard' style={styles.HrefFooterRefer}><i className="fab fa-cc-mastercard fa-2x" style={{margin: '5px'}}/></Link>
                    </div>
                </div>
                <div className="social-networks" style={styles.SocialNetwork}>
                    <div>Следите за нами</div>
                    <Link to='/FB' style={styles.HrefFooterRefer}><i className="fab fa-facebook fa-2x" style={{margin: '5px'}}/></Link>
                    <Link to='/VK' style={styles.HrefFooterRefer}> <i className="fab fa-vk fa-2x" style={{margin: '5px'}}/></Link>
                    <Link to='/telegram' style={styles.HrefFooterRefer}><i className="fab fa-telegram fa-2x" style={{margin: '5px'}}/></Link>
                </div>
                <div className="bottom-footer" style={{display:'flex'}}>
                    <div className="copyright" style={styles.Copyright}>&copy; 2019 vertour LLC. Все права защищены</div>
                    <div className="confidential-politic" style={styles.ConfidentialPolitics}>
                        <div className='politic'>
                            <Link to='/confidential' style={styles.HrefFooter}>Политика конфиденциальности</Link>
                        </div>
                        <div className='terms-use'>
                            <Link to='/terms_use' style={styles.HrefFooter}>Условия использования</Link>
                        </div>
                    </div>
                    <div className="referents-company" style={styles.ReferenceFooterCompany}>Разработано
                        <Link to='/jscorp' style={styles.HrefFooterRefer}>  JS Corporation</Link></div>
                </div>

            </div>
        )
    }
}
