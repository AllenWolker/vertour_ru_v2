import React from 'react';
import styled from 'styled-components';

const StatusWrapper = styled.div`
    grid-area: status;
    width: 218px;
    height: 69px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const StateBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
`;

const State = styled.div`
    font-size: 18px;
    line-height: 17px;
    text-align: left;
`;

const StarsBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 8px;
`;

const Star = styled.div`
    content: url(${props=>props.starIconPath});
    margin-left: 4px;
`;

const Condition = styled.div`
    font-size: 18px;
    line-height: 17px;
    width: 118px;
    padding-bottom: 8px;
    border-bottom: 1px solid #C4C4C4;
`;

const Status  = (props) => {
    const {
        state,
        starIconPath
    } = props;

    let starsLine = (count) => {
        let stars = [];
        for(let i=0; i<count; i++) stars.push(<Star key={i} starIconPath={process.env.PUBLIC_URL + starIconPath}/>)
        return stars;
    };

    let stars;
    switch(state){
        case 'Профи':
            stars = starsLine(5);
            break;

        case 'Геймер':
            stars = starsLine(2);
            break;

        default:
            stars = starsLine(1);
    }

    return (
        <StatusWrapper>
            <StateBlock>
                <State>Статус:</State>
                <StarsBlock>{stars}</StarsBlock>
            </StateBlock>
            <Condition>{state}</Condition>
        </StatusWrapper>
    )
};

export default Status;