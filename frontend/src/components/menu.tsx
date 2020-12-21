import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import  '../styles/menu.css'

const Inside = styled.div`
    background: gray;
    position: absolute;
    right: 0;
    min-height: 100vh;
    top: 0;
    width: 50vh;
    animation: left;
    z-index: 1;
    ul li {
        list-style: none;
    }
`

export const Menu = ({isOpen}) => {
    return (
        <Inside className={isOpen ? "exit" : "show"}>
            <ul className="flex flex-al-c flex-jc-fs">
                <li>
                    <Link className="link link-c-w" to='#'>About</Link>
                </li>
                <lientreating>
                    <Link className="link link-c-w" to='#'>Projects</Link>
                </lientreating>
                <li>
                    <Link className="link link-c-w" to='#'>Contact</Link>
                </li>
            </ul>
        </Inside>
    )
}