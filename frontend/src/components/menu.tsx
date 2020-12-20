import React from 'react'
import styled from 'styled-components'
import  '../styles/menu.css'
import {SpringConfig} from 'react-spring'

const Inside = styled.div`
    background: gray;
    position: absolute;
    right: 0;
    min-height: 100vh;
    top: 0;
    width: 50vh;
    animation: left;
    z-index: 1;
`

export const Menu = ({isOpen}) => {
    return (
        <Inside className={isOpen ? "exit" : "show"}>
            <ul>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Projects</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </Inside>
    )
}