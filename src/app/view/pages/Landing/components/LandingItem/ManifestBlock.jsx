import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const BlockWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-image: url(${props => props.blockBackgroundPath});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: ${props => props.height};
    padding-top: 122px;
    padding-left: calc( (100vw - 1366px)/(1920 - 1366) * (160 - 120) + 120px);
    padding-right: calc( (100vw - 1366px)/(1920 - 1366) * (160 - 120) + 120px);
`;

const Manifest = styled.div`
    height: 694px;
    border-radius: 10px;
    background: rgba(10, 0, 13, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    
`;

const ManifestHeader = styled.div`
    background: #0A000D;
    font-family: GothamPro,sans-serif;
    padding-top: 34px;
    padding-bottom: 35px;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: calc( (100vw - 1366px)/(1920 - 1366) * (72 - 60) + 60px);
    border-radius: 10px;
       
`;

const ManifestBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 69px 124px 10px 123px;
    box-sizing: border-box;
   
    @media (max-width: 860px){
        padding: 30px 124px 30px 123px;
    } 
    @media (max-width: 647px){
        padding: 30px 50px;
        text-align: center;
    }
    @media (max-width: 465px){
       padding: 30px;
    }
    @media (max-width: 419px){
        padding: 15px;
     }
`;

const CheckInBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const ManifestText = styled.p`
    height: auto;
    text-align: left;
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: calc( (100vw - 1366px)/(1920 - 1366) * (36 - 28) + 28px);
    @media (max-width: 860px){
        font-size: 20px
    }
`;

const CheckIn = styled(Link)`
    text-decoration: none;
    font-family: GothamPro,sans-serif;
    color: #FFFFFF;
    background: #840318;
    border-radius: 5px;
    margin-top: 140px;
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
    @media (max-width: 518px){
        width: 350px;
    }
    @media (max-width: 431px){
        width: 300px
    }
`;

const BlockType = (props) => {

    if(props.manifest.length === 3) {
        return(
            <ManifestBody>
                <CheckInBlock>
                    <ManifestText>{props.manifest[1]}</ManifestText>
                    <CheckIn to={'/registration'}>{props.manifest[2]}</CheckIn>
                </CheckInBlock>
            </ManifestBody>
        )
    }else{
        return(
            <ManifestBody>
                <ManifestText>{props.manifest[1]}</ManifestText>
            </ManifestBody>
        )
    }
};

const ManifestBlock = (props) => {
    const {
        blockBackgroundPath,
        manifest,
        height
    } = props;

    return(
        <BlockWrapper
            blockBackgroundPath={process.env.PUBLIC_URL + blockBackgroundPath}
            height={height}>
            <Manifest>
                <ManifestHeader>{manifest[0]}</ManifestHeader>
                <BlockType manifest={manifest}/>
            </Manifest>
        </BlockWrapper>
    )
};



export default ManifestBlock;
