import React from 'react';
import styled from 'styled-components';

const BlockWrapper = styled.div`
    grid-area: place;
    width: 68px;
    height: 69px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const PlaceHeader = styled.div`
    font-size: 18px;
    line-height: 17px;
    text-align: left;
    margin-bottom: 20px;
`;

const Place = styled.div`
    font-size: 18px;
    line-height: 17px;
    width: 68px;
    padding-bottom: 8px;
    border-bottom: 1px solid #C4C4C4;
`;

const PlaceBlock = (props) => {
    const { rating } = props;

    return(
        <BlockWrapper>
            <PlaceHeader>Место:</PlaceHeader>
            <Place>{rating}</Place>
        </BlockWrapper>
    );
};

export default PlaceBlock;