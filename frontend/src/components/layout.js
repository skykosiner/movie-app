import React, { useState } from "react"
import PropTypes from "prop-types"
import { Header } from "./header.tsx"
import GlobalStyle from "./globalStyles"
import { Menu } from "./menu.tsx"
import "../styles/header.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <GlobalStyle />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Menu isOpen={isOpen} />}
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
