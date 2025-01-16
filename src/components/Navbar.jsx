import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import {Bio} from '../data/constants'
import {MenuRounded} from '@mui/icons-material' 

const NavbarContainer = styled.div`
    background-color: ${({theme}) => theme.bg};
    height: 80px;
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    color: white;
`
const NavLogo = styled(Link)`
    padding: 0 6px;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    width: 80%;
`

const MobileIcon = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.text_primary};
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
    }
`
const MobileMenu = styled.ul`
position: absolute;
top: 80px;
right: 0px;
list-style-type: none;
display: flex;
flex-direction: column;
align-items: start;
width: 100%;
gap: 16px;
padding: 10px 30px;
background-color: ${({theme}) => theme.card_light+90};
font-weight: 500;

transition: all 0.6s ease-in-out;
transform: ${({isopen}) => isopen ? "translateY(0)": "translateY(100%)"}; 
opacity: ${({isopen}) => isopen ? 1 : 0};
z-index: ${({isopen}) => isopen ? 1000 : -1000}
`

const NavItems = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    gap: 32px;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const NavItem = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    color: ${({theme}) => theme.text_primary};
    &:hover {
        color: ${({theme}) => theme.primary};
    }
`
const ButtonContainter = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 80%;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const GitHubButton = styled.a`
    color: ${({theme}) => theme.primary};
    text-decoration: none;
    border: 1px solid ${({theme}) => theme.primary};
    padding: 8px 16px;
    border-radius: 10px;
    font-weight: 500;   
     transition: all 0.2s ease-in-out;
     &:hover {
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.text_primary};
    };
`

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const theme = useTheme()
  return (
      <NavbarContainer>
        <NavLogo to='/'>Portfolio</NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            <MenuRounded style={{
                fontSize: "1.6rem"
            }} />
        </MobileIcon>
        <NavItems>
            <NavItem href='#about'>About</NavItem>
            <NavItem href='#skills'>Skills</NavItem>
            <NavItem href='#experience'>Experience</NavItem>
            <NavItem href='#projects'>Projects</NavItem>
            <NavItem href='#education'>Education</NavItem>
        </NavItems>
        <ButtonContainter>
            <GitHubButton href={Bio.github} target='_Blank'>GitHub Profile</GitHubButton>
        </ButtonContainter>
        {isOpen && 
        <MobileMenu isopen={isOpen}>            
            <NavItem onClick={() => setIsOpen(!isOpen)} href='#about'>About</NavItem>
            <NavItem onClick={() => setIsOpen(!isOpen)} href='#skills'>Skills</NavItem>
            <NavItem onClick={() => setIsOpen(!isOpen)} href='#experience'>Experience</NavItem>
            <NavItem onClick={() => setIsOpen(!isOpen)} href='#projects'>Projects</NavItem>
            <NavItem onClick={() => setIsOpen(!isOpen)} href='#education'>Education</NavItem>
            <GitHubButton onClick={() => setIsOpen(!isOpen)} href={Bio.github} target='_Blank' style={{
                backgroundColor: theme.primary,
                color: theme.text_primary
            }}>GitHub Profile</GitHubButton>
        </MobileMenu>}
    </NavbarContainer>
  )
}

export default Navbar