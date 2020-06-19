import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CheckInBlock from '../components/Landing/CheckInBlock';
import ManifestBlock from '../components/Landing/ManifestBlock';

const LandingWrapper = styled.div`
    background-color: #0A000D;
    width: 100%;
    height: auto
`;

class Landing extends PureComponent{
    render() {
        const { landing } = this.props;

        const blocks = landing.landingBlocks.map((block, index) => {
            if(index<1 || index>3){
                return <CheckInBlock
                    key={index}
                    blockBackgroundPath={block.blockBackgroundPath}
                    landingLogoPath={block.landingLogoPath}
                    manifest={block.manifest}
                    height={block.height}
                />
            }else{
                return <ManifestBlock
                    key={index}
                    blockBackgroundPath={block.blockBackgroundPath}
                    manifest={block.manifest}
                    height={block.height}
                />
            }
        });

        return <LandingWrapper>{blocks}</LandingWrapper>
    }
}

const mapStateToProps = (store) => {
    return {
        landing: store.landing
    }
};

export default connect(mapStateToProps)(Landing);