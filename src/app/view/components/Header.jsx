import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

class Header extends PureComponent {

    render() {
        const {
            menuPoints,
            user,
            headerLogoPath,
            userIconPath
        } = this.props.headerMenu;

        const points = menuPoints.map((point, index) => {
            return <MenuPoint key={index}>{point}</MenuPoint>
        });

        return(
            <HeaderWrapper>
                <HeaderLogo headerLogoPath={process.env.PUBLIC_URL + headerLogoPath}/>
                <HeaderMenuWrapper>
                    <HeaderMenu>
                        {points}
                    </HeaderMenu>
                    <UserWrapper>
                        <User>
                            <UserName>{user[0]}</UserName>
                            <Bot>{user[1]}</Bot>
                        </User>
                        <UserIcon userIconPath={process.env.PUBLIC_URL + userIconPath} />
                    </UserWrapper>
                </HeaderMenuWrapper>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        headerMenu: store.headerMenu
    }
};

export default connect(mapStateToProps)(Header);