import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const AsideWrapper = styled.div`
    background: rgba(0, 0, 0, 0.6);
    border-right: 1px solid rgba(196, 196, 196, 0.2);
    position: absolute;
    top: 0;
    bottom: 0;
    width: 307px;
`;

const Sidebar = styled.ul`
    margin-left: 0;
    padding-left: 0;
    margin-top: 64px;
`;

const SidebarLi = styled.li`
    height: 42px;
    box-sizing: border-box;
    margin-bottom: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    line-height: 16px;
    cursor: pointer;
    
    :hover {
    background: rgba(37, 35, 35, 0.5);
    text-decoration: none;
  }
`;

const Aside = (props) => {
    const { menuPoints } = props;
    const points = menuPoints.map((point, index) => {
        return <SidebarLi key={index}>{point}</SidebarLi>
    });

    return(
        <AsideWrapper>
            <Sidebar>{points}</Sidebar>
        </AsideWrapper>
    )
};

export default Aside;

Aside.propTypes = {
    menuPoints: PropTypes.array.isRequired
};