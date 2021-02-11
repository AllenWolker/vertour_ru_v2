import styled from 'styled-components';

const ButtonTextColor = 'white';
const ButtonColor = '#840318';
const fontColor = '#FFFFFF';
const N = 30;
const ContainerLogin = styled.div`
    backgroundImage: url("/assets/background4.jpg");
    backgroundRepeat: no-repeat;
    minHeight: 1080px;
`;

const HrefDecoration = styled.a`
    text-decoration: none;
    font-family: "Gotham Pro", Serif, Verdana, fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    color: fontColor;
`;
const FooterNewsHrefDecoration = styled.a`
    text-decoration: none;
    font-family: "Gotham Pro", Serif, Verdana, fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    padding-bottom: 12px;
    color: font-color;
`;
const MenuComponents = styled.div`
    position: relative;
    width: 75px;
    height: 17px;
   // left: 441px;
    margin-right: 40px;
    top: 36px;
    font-family: "Gotham Pro", Serif, Verdana, fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    color: fontColor;
`;
const LoginComponents = styled.div`
    position: relative;
    width: 75px;
    height: 17px;
   // left: ${870+ N}px;
    top: 36px;
    margin-left: 40px;
    font-family: "Gotham Pro", Serif, Verdana, fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    color: fontColor;
    border-left: 2px solid white;
`;
const MenuLogoImg = styled.img`
    position: relative;
    width: 202px;
    height: 68px; 
    left: 35px;
    top: 16px;
`;
const MenuStyleRoute = styled.div`
    font-family: "Arial", Serif, Verdana, fantasy;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.64px;
    line-height: 42px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    max-width: 1920px;
    height: 100px;
    background: rgba(0, 0, 0, 0.65);
`;

const LoginComponent = styled.div`
    position: relative;
    width: 717px;
    height: 690px;
    margin-right: 200px;
    margin-bottom: 33px;
    margin-top: 8px;
    margin-left: 1px;
    background: rgba(255, 255, 255, 0.95);
    opacity: 0.9;
    border-radius: 10px;
    //backgroundColor: #44014C;
    min-height: 200px;
    box-sizing: border-box;
`;
const LoginEnter = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    width: 300px;
    height: 182px;
    margin: 0 auto;
    top: 91px;
    align-items: center;
    justify-content: space-around;
    flex: 1 16px;

    font-family: Gotham Pro Bold;
    font-style: normal;
    font-weight: Bold;
    font-size: 24px;
    line-height: 23px;
    text-align: center;
    color: #343434;
`;
const PageRegister = styled.div`
    position: relative;
    width: 333px;
    height: 375px;
    margin: 0 auto;
    top: 125px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 23px;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    flex: 1 16px;
    color: #343434;
`;
const JScorpFooterLogo = styled.img`
    position: relative;
    width: 152px;
    height: 42px;
    left: 221px;
    top: 140px;
`;

const VertourFooterLogo = styled.div`
    position: relative;
    width: 154px;
    height: 52px;
    left: 371px;
    top: 45px;
`;

const FooterStyle = styled.div`
    max-width: 1920px;
    display: flex;
    height: 274px;
    background: rgba(0, 0, 0, 0.65);
`;

const InformationMenu = styled.div`
    position: relative;
    height: 80px;
    left: 470px;
    top: 38px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    color: fontColor;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-around;
    flex: 1 16px;
`;

const NewsMenu = styled.div`
    position: relative;
    width: 110px;
    height: 100px;
    left: 635px;
    top: 40px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    color: fontColor;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    flex: 1 16px;
`;

const Copyright = styled.div`
    position: relative;
    width: 256px;
    height: 11px;
    left: -370px;
    top: 231px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 11px;
    display: flex;
    align-items: flex-end;
    color: fontColor;
`;
const ConfidentialPolitics = styled.div`
    position: relative;
    width: 357px;
    height: 11px;
    left: -285px;
    top: 234px;
    display: flex;
    align-items: flex-end;
    text-decorationLine: underline;
`;
const HrefFooter = styled.a`
    text-decoration: none;
    font-size: 12px;
    line-height: 11px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    color: fontColor;
`;
const HrefFooterRefer = styled.a`
    text-decoration: none;
    font-size: 12px;
    line-height: 11px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    color: aquamarine;
`;
const PaymentMethod = styled.div`
    position: relative;
    height: 14px;
    left: 865px;
    top: 45px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    color: fontColor;
`;
const SocialNetwork = styled.div`
    position: relative;
    height: 14px;
    left: 730px;
    top: 140px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    color: fontColor;
`; 
const ReferenceFooterCompany = styled.div`
    position: relative;
    width: 174px;
    height: 11px;
    left: -119px;
    top: 230px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 11px;
    display: flex;
    align-items: flex-end;
    color: fontColor;
`;
const AgreementsStyle = styled.div`
    position: relative;
    width: 240px;
    height: 26px;
    margin: 0 auto
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 13px;
    text-decorationLine: underline;
    color: #343434;
`;
const InputLoginStyle = styled.input`
    position: relative;
    width: 300px;
    height: 40px;
    margin-top: 5px;
    border: 1px solid #343434;
    box-sizing: border-box;
    border-radius: 5px;
`;
const LogInButton = styled.button`
    position: relative;
    width: 132px;
    height: 40px;
    color: ButtonTextColor;
    background: ButtonColor;
    border-radius: 5px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
`;
const ForgotPassButton = styled.button`
    position: relative;
    width: 162px;
    height: 40px;
    color: ButtonTextColor;
    background: #5F5F5F;
    border-radius: 5px;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
`;

const RegisterForm = styled.div`
    position: relative;
    width: 300px;
    height: 23px;
    bottom: 15px;
    font-family: Gotham Pro Bold;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 23px;
    text-align: left;
    color: '#343434;
`;

const TitleFontFooter = styled.footer`
    height: 17px;
    font-family: Gotham Pro Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 17px;
    color: fontColor;
`;
const InputNamesStyle = styled.input`
    position: relative;
    width: 131px;
    height: 40px;
    border: 1px solid #343434;
    box-sizing: border-box;
    border-radius: 5px;
`;
const InputSecondNameStyle = styled.input`
    position: relative;
    width: 160px;
    height: 40px;
    border: 1px solid #343434;
    box-sizing: border-box;
    borderRadius: 5px;
`;
const NamesWrapper = styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: space-around;
    flex: 1 16px;
`;
const InputDataWrap = styled.input`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    flex: 8;
`;

//recovery page styles
const RecoveryPassword = styled.div`
    position: relative;
    display: flex;
    min-width: 700px;
    min-height: 388px;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;
    border-radius: 10px;
`;
const MainRecoveryDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 150px;
    padding-bottom: 170px;
`;
const RecoveryText = styled.p`
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 23px;
`;
const RecoveryParagraph = styled.p`
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    color: #343434;
`;
const LinkRecoveryLogin = styled.p`
    text-decoration: none;
    font-family: "Gotham Pro", Serif, Verdana, fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    text-decorationLine: underline;
    color: #343434;
`;
const SubmitRecoveryEmail = styled.div`
    background: ButtonColor;
    border-radius: 5px;
    color: white;
    width: 135px;
    height: 35px;
`;
const ConfirmEmailRecoveryDiv = styled.div`
    position: relative;
    display: flex;
    min-width: 500px;
    min-height: 300px;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;
    border-radius: 10px;
`;
const RegistrationHref = styled.a`
    position: relative;
    width: 75px;
    height: 17px;
   // left: ${830+ N}px;
    top: 36px;
    font-family: "Gotham Pro", Serif, Verdana, fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    color: fontColor;
`;
const ShadowBox = styled.div`
    background-color: rgba(0, 0, 0, 0.45);
`;
//fff
const styles = {
    LoginComponent: LoginComponent,
    FooterStyle: FooterStyle,
    MenuStyleRoute: MenuStyleRoute,
    MenuLogoImg: MenuLogoImg,
    ContainerLogin: ContainerLogin,
    MenuComponents: MenuComponents,
    HrefDecoration: HrefDecoration,
    HrefFooter: HrefFooter,
    JScorpFooterLogo: JScorpFooterLogo,
    VertourFooterLogo: VertourFooterLogo,
    InformationMenu: InformationMenu,
    NewsMenu: NewsMenu,
    Copyright: Copyright,
    ConfidentialPolitics: ConfidentialPolitics,
    PaymentMethod: PaymentMethod,
    SocialNetwork: SocialNetwork,
    HrefFooterRefer: HrefFooterRefer,
    ReferenceFooterCompany: ReferenceFooterCompany,
    LoginEnter: LoginEnter,
    AgreementsStyle: AgreementsStyle,
    InputLoginStyle: InputLoginStyle,
    PageRegister: PageRegister,
    LogInButton: LogInButton,
    ForgotPassButton: ForgotPassButton,
    LoginComponents: LoginComponents,
    FooterNewsHrefDecoration: FooterNewsHrefDecoration,
    RegisterForm: RegisterForm,
    TitleFontFooter: TitleFontFooter,
    InputNamesStyle: InputNamesStyle,
    NamesWrapper: NamesWrapper,
    InputDataWrap: InputDataWrap,
    InputSecondNameStyle: InputSecondNameStyle,
    RecoveryPassword: RecoveryPassword,
    MainRecoveryDiv: MainRecoveryDiv,
    RecoveryText: RecoveryText,
    RecoveryParagraph: RecoveryParagraph,
    LinkRecoveryLogin: LinkRecoveryLogin,
    SubmitRecoveryEmail: SubmitRecoveryEmail,
    ConfirmEmailRecoveryDiv: ConfirmEmailRecoveryDiv,
    RegistrationHref:RegistrationHref,
    ShadowBox:ShadowBox,
};
export default styles;

