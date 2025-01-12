import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Bio} from '../data/constants'

const NavbarContainer = styled.div`
    background-color: ${({theme}) => theme.bg};
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    color: white;
`
const NavLogo = styled(Link)`
    padding: 0 6px;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
`

const NavItems = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    width: 80%;
    gap: 32px;
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
    }
`

function Navbar() {
  return (
    <NavbarContainer>
        <NavLogo to='/'>Portfolio</NavLogo>

        <NavItems>
            <NavItem href='#about'>About</NavItem>
            <NavItem href='#skills'>Skills</NavItem>
            <NavItem href='#experience'>Experience</NavItem>
            <NavItem href='#projects'>Projects</NavItem>
            <NavItem href='#education'>Education</NavItem>
        </NavItems>
        <GitHubButton href={Bio.github}>GitHub</GitHubButton>
    </NavbarContainer>
  )
}

export default Navbar