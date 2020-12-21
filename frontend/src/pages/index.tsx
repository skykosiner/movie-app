import React from "react"
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CardFilms } from '../components/card.js'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <CardFilms />
    </Layout>
  )
}

export default IndexPage
