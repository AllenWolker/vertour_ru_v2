import React from 'react';
import CheckInBlock from "../LandingItems/CheckInBlock";
import ManifestBlock from "../LandingItems/ManifestBlock";

const LandingList = (props) =>{

    const Blocks = props.initialState.landingBlocks.map((block, index) => {
        if(index<1 || index>3){
            return <CheckInBlock
                key={index}
                backgroundImagePath={block.backgroundImagePath}
                landingLogoPath={block.landingLogoPath}
                manifest={block.manifest}
                height={block.height}
            />
        }else{
            return <ManifestBlock
                key={index}
                backgroundImagePath={block.backgroundImagePath}
                manifest={block.manifest}
                height={block.height}
            />
        }
    });
return(<>
        {Blocks}
    </>
)
}

export default LandingList;
