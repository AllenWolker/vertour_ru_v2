import React from 'react';
import styled from 'styled-components';

const TeamWrapper = styled.div`
    grid-area: team;
    width: 118px;
    height: 69px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const TeamHeader = styled.div`
    font-size: 18px;
    line-height: 17px;
    text-align: left;
    margin-bottom: 20px;
`;

const TeamName = styled.div`
    font-size: 18px;
    line-height: 17px;
    width: 118px;
    padding-bottom: 8px;
    border-bottom: 1px solid #C4C4C4;
`;

const TeamBlock = (props) => {
    const { team } = props;

    return(
        <TeamWrapper>
            <TeamHeader>Команда:</TeamHeader>
            <TeamName>{team}</TeamName>
        </TeamWrapper>
    );
};

export default TeamBlock;