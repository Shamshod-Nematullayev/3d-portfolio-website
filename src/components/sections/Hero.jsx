import React from 'react'
import {styled} from 'styled-components'
import { Bio } from '../../data/constants'
import TypewriterComponent from 'typewriter-effect'
import HeroImg from '../../images/hero_img.jpg'
import HeroBgAnimation from '../HeroBgAnimation/index'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

const HeroContainer = styled.div`
    padding: 30px 40px;
`
const InnerConteinter = styled.div`
    display: flex;
    justify-content: center;
        @media(max-width: 960px){
        flex-direction: column;
    }

`
const LeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media(max-width: 960px){
        order: 2;
        margin-bottom: 30px;
        display: flex;
        gap: 6px;
        flex-direction: column;
        aligin-items: center
    }
`
const RightContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    order: 2;
    @media(max-width: 960px){
        order: 1;
    }

`

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    padding-bottom: 10px;
    font-weight: 700;
    line-height: 68px;
    @media(max-width: 960px){
        text-align: center;
    }
    @media(max-width: 960px){
        text-align: center;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 50px;
        padding-bottom: 20px;
    }
`
const TextLoop = styled.p`
    gap: 12px;
    font-size: 2rem;
    padding-bottom: 40px;
    font-weight: 700;
    line-height: 68px;
    @media(max-width: 960px){
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 50px;
        padding-bottom: 20px;
    }`

const Span = styled.span`
    color: ${({theme}) => theme.primary};
    > * {
    display: inline;}
`

const Description = styled.div`
    font-size:  20px;
    line-hieght: 32px;
    margin-bottom: 42px;
    text-align: justify;
    text-indent: 30px;
    color: ${({theme}) => theme.text_primary + 95};
    @media (max-width: 960px){
        font-size: 16px;
        line-hieght: 48px;
        margin-bottom: 16px;
    }
`
const ResumeButton = styled.a`
    -webkit-apperance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 12px 0;
    font-size: 18px;
    border-radius: 25px;
    margin: auto;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
        transition: all 0.4s eas-in-out;
        box-shadow: 20px 20px 60px #1f2634;
        filter: brightness(1);
    }
`;
const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    hieght: 100%;
    max-width: 400px;
    max-height: 400px;
    z-index: 1;
    border: 2px solid ${({theme}) => theme.primary};
    @media (max-width: 640px){
    max-width: 280px;
    max-height: 280px;
    }
`;
const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`


function Hero() {
  return (
    <HeroContainer>
        <motion.div>
        <InnerConteinter>
            <LeftContainer>
                <Title>
                    Hi, I am <br />{Bio.name} 
                </Title>
                <TextLoop>
                    I am a <Span><TypewriterComponent options={{
                        loop: true,
                        strings: Bio.roles,
                        autoStart: true,
                        delay: 100,
                        wrapperClassName: 'typewriter-wrapper',
                        cursor: '|',
                    }} /></Span>
                </TextLoop>
                <Description>
                    {Bio.description}
                </Description>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ResumeButton>
                    Check Rusume
                </ResumeButton>
                </div>
            </LeftContainer>
            <RightContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <div style={{
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Tilt>
                    <Img src={HeroImg}/>   
                </Tilt>
                </div>
            </RightContainer>
        </InnerConteinter>     
        </motion.div>
       
    </HeroContainer>
  )
}

export default Hero