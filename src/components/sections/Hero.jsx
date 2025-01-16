import React from 'react'
import {styled} from 'styled-components'
import { Bio } from '../../data/constants'
import TypewriterComponent from 'typewriter-effect'

const HeroContainer = styled.div`
    padding: 80px 40px;
`
const InnerConteinter = styled.div`
    display: flex;
    justify-content: center;
        @media(max-width: 960px){
        flex-direction: column;
    }

`
const LeftContainer = styled.div`
    order: 1;
    @media(max-width: 960px){
        order: 2;
    }
`
const RightContainer = styled.div`
    order: 2;
    background: red;
        @media(max-width: 960px){
        order: 1;
    }

`

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    padding-bottom: 40px;
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
const TextLoop = styled.div`
    display: flex;
    gap: 12px;
    text-align: center;
    font-size: 3rem;
    padding-bottom: 40px;
    font-weight: 700;
    line-height: 68px;
    @media(max-width: 960px){
        text-align: center;
    }
    @media(max-width: 960px){
        text-align: center;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 50px;
        padding-bottom: 30px;
    }`

const Span = styled.span`
    
`

function Hero() {
  return (
    <HeroContainer>
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
            </LeftContainer>
            <RightContainer>
                Right
            </RightContainer>
        </InnerConteinter>
    </HeroContainer>
  )
}

export default Hero