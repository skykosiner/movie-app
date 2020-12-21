import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import HamburgerMenu from 'react-hamburger-menu';

const NavBar = styled.header`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 50px;
  margin-right: 40px;
  .hamburger {
    position: fixed;
    top: 4%;
    right: 5%;
    z-index: 2;
  }
`

const Name = styled.p`
  position: absolute;
  left: 5%;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 7px;
`

export const Header = ({isOpen, setIsOpen}) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavBar>
      <Name className="bold">Movie list</Name>
           <div className="hamburger">
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleClick}
              width={25}
              height={20}
              strokeWidth={1}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
              className='burger'
            />
          </div>
    </NavBar>
  )
}
