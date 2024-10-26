import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

import ParticleBackground from '../ParticleBackground/ParticleBackground';

const HeroSection = () => {
    return (
        <div id="about">
            <ParticleBackground />
            <HeroContainer>
                {}
                <HeroInnerContainer style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center' 
                }}>
                    <Title>Hi, I am <br /> {Bio.name}</Title>
                    <TextLoop>
                        I am a
                        <Span>
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Span>
                    </TextLoop>
                    <SubTitle style={{ 
                        maxWidth: '700px', 
                        margin: '0 auto 40px', 
                        textAlign: 'center' 
                        }}>
                        {Bio.description}
                    </SubTitle>
                    <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
};

export default HeroSection