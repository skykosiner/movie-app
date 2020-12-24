import React, { useState } from "react"
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FilmCard } from "../components/card.js"
import { SearchBar } from "../components/searchBar"

const IndexPage = () => {
  const [isSearching, setIsSearching] = useState(false)
  return (
    <Layout>
      <SEO title="Home" />
      <SearchBar isSearching={isSearching} setIsSearching={setIsSearching} />
      {isSearching ? (
        ""
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FilmCard isSearching={isSearching} setIsSearching={setIsSearching} />
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
