import React from "react"
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from '../components/card.js'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Card />
    </Layout>
  )
}

export default IndexPage
