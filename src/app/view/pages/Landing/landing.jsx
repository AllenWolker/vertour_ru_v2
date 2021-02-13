import React, { PureComponent } from 'react';
import styled from 'styled-components';

import CheckInBlock from '../../components/Landing/CheckInBlock';
import ManifestBlock from '../../components/Landing/ManifestBlock';

const LandingWrapper = styled.div`
    background-color: #0A000D;
    width: 100%;
    height: auto;
`;

export default class Landing extends PureComponent{
    render() {
        const initialState = {
            landingBlocks: [
                {
                    blockBackgroundPath: 'assets/Landing/background6.jpg',
                    landingLogoPath: 'assets/Landing/vertour-logo.png',
                    manifest: [
                        'Присоединяйся к Vertour',
                        'Играй в игры, выигрывай призы!',
                        'Регистрируйся'
                    ],
                    height: '1022px'
                },
                {
                    blockBackgroundPath: 'assets/Landing/background5.png',
                    manifest: [
                        'Будь первым!',
                        'Привет! Мы разрабатываем Vertour - платформу, где ты сможешь участвовать в турнирах в любое время, и получать за это денежные призы! А еще здесь можно будет записать на игру с настоящими профессионалам и любимым стримером! Если хочешь почувствовать себя настоящим киберспортсменом, и, возможно, стать таковым (да-да, с этим мы тоже планируем помогать), регистрируйся уже сейчас, чтобы стать одним из первых участников Vertour'
                    ],
                    height: '937px',
                },
                {
                    blockBackgroundPath: 'assets/Landing/background7.png',
                    manifest: [
                        'Стань известным!',
                        'Мы планируем сделать победы с нами не только оплачиваемыми, но и значинмыми для репутации. Одна из задач состоит в том, что, выигрывая у нас, вы становитесь заметнее для организаций, и повышайте свои шансы выйти на мировую киберарену.'
                    ],
                    height: '924px',
                },
                {
                    blockBackgroundPath: 'assets/Landing/background4.jpg',
                    manifest: [
                        'Игры с профи',
                        'На нашей платформе профи смогут вести свой календарь, и открывать записи, выбирать когда и за сколько они готовы сыграть с фанатами. Просто найди нужного игрока, зайди в его календарь, запишись на ближайшую доступную игру!',
                        'Регистрируйся'
                    ],
                    height: '924px',
                },
                {
                    blockBackgroundPath: 'assets/Landing/background8.png',
                    landingLogoPath: 'assets/Landing/vertour-logo.png',
                    manifest: [
                        'Регистрируйся уже сейчас!',
                        'Регистрируйся'
                    ],
                    height: '1211px'
                }
            ]
        };





        const blocks = initialState.landingBlocks.map((block, index) => {
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

