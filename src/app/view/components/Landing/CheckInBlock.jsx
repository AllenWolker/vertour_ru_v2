import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlockWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-top: 72px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${props => props.blockBackgroundPath});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: ${props => props.height};
    @media (max-width: 600px){
        padding-bottom: 30px;
        
    }
`;

const Logo = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url(${props => props.landingLogoPath});
    margin-top: 80px;
    width: 100%;
    height: 241px;
    @media (max-width: 411px){
        background-size: 300px;
        margin-top: 30px;
        margin-bottom: 30px
    } 
`;

const Vector = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url(${props => props.landingLogoPath});
    margin-top: 255px;
    margin-bottom: 48px;
    width: 400px;
    height: 336px;
    @media (max-width: 411px){
        background-size: 300px;
        margin-top: 30px;
        margin-bottom: 30px;
        width: 300px
    } 
    

`;

const CheckIn = styled(Link)`
    text-decoration: none;
    font-family: GothamPro;
    color: #FFFFFF;
    background: #840318;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc( (100vw - 1366px)/(1920 - 1366) * (560 - 500) + 500px);
    height: calc( (100vw - 1366px)/(1920 - 1366) * (102 - 88) + 88px);
    font-style: normal;
    font-weight: normal;
    font-size: calc( (100vw - 1366px)/(1920 - 1366) * (40 - 35) + 35px);
    letter-spacing: 0.03em;
    cursor: pointer;
    @media (max-width: 860px){
        padding: 20px 5px
    }   
    @media (max-width: 500px){
        font-size 40px
    }
    @media (max-width: 417px){
        font-size: 25px;
        height: 30px;
        width: 270px
    } 
`;

const Associate = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: calc( (100vw - 1366px)/(1920 - 1366) * (48 - 40) + 50px);
    margin-top: 88px;
    text-align: center;
    @media (max-width: 860px){
        
    }   
`;

const Play1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    text-align: center;
    margin-top: 38px;
    margin-bottom: 80px;
    font-weight: 600;
    font-size: calc( (100vw - 1366px)/(1920 - 1366) * (96 - 84) + 84px);
    line-height: calc( (100vw - 1366px)/(1920 - 1366) * (144 - 132) + 132px);
    @media (max-width: 417px){
        font-size: 50px;
        line-height: 70px;
    } 
    
`;

const Play2 = styled.div`
    font-family: Roboto;
    font-style: normal;
    text-align: center;
    margin-top: 38px;
    margin-bottom: 80px;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    
    @media (max-width: 500px){
        font-size: 50px
    }   
`;

const BlockType = (props) => {
    if(props.manifest.length === 3) {
        return(
            <BlockWrapper
                blockBackgroundPath={props.blockBackgroundPath}
                height={props.height}>
                <Logo landingLogoPath={props.landingLogoPath}/>
                <Associate>{props.manifest[0]}</Associate>
                <Play1>{props.manifest[1]}</Play1>
                <CheckIn to={'/registration'}>{props.manifest[2]}</CheckIn>
            </BlockWrapper>
        )
    }else{
        return(
            <BlockWrapper
                blockBackgroundPath={props.blockBackgroundPath}
                height={props.height}>
                <Vector landingLogoPath={props.landingLogoPath}/>
                <Play2>{props.manifest[0]}</Play2>
                <CheckIn to={'/registration'}>{props.manifest[1]}</CheckIn>
            </BlockWrapper>
        )
    }
};

const WindowSize = window.innerWidth;

const CheckInBlock = (props) => {
    const {
        blockBackgroundPath,
        landingLogoPath,
        manifest,
        height
    } = props;

    return(
        <BlockType
            landingLogoPath={process.env.PUBLIC_URL + landingLogoPath}
            manifest={manifest}
            blockBackgroundPath={process.env.PUBLIC_URL + blockBackgroundPath}
            height={height}
        />
    )
};

export default CheckInBlock;