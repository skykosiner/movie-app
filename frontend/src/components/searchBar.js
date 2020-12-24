import React, { useState } from "react"
import api from "../api"

export const SearchBar = ({ isSearching, setIsSearching }) => {
  // State
  const [findFilm, setFindFilm] = useState([])

  const onSubmit = async e => {
    e.preventDefault()
    const input = e.target.value
    await api
      .get(`/Search/k_t3mv9452/${input}`) //
      .then(response => {
        if (response.data.errorMessage === "") {
          setFindFilm(response.data.results.splice(0, 100))
          console.log(response)
        } else {
          try {
            const getAgain = async () => {
              await api.get(`/Search/k_zc0xrv4c/${input}`).then(response => {
                setFindFilm(response.data.results.splice(0, 100))
                console.log(response)
              })
            }
            getAgain()
          } catch (error) {
            console.log(response)
          }
        }
      })
  }

  // For later onChange={this.props.onSearch}
  return (
    <div className="ui fluid search" style={{ margin: "auto" }}>
      <form onSubmit={onSubmit} onChange={onSubmit}>
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            id="player"
            placeholder="Search films"
          />
          {/* <i className="search icon"></i> */}
          <input type="submit" value="Submit" />
        </div>
      </form>
      {isSearching &&
        findFilm.map(film => (
          <div key={film.id}>
            <p style={{ fontSize: "20px" }}>{film.title}</p>
            <img style={{ width: "100px" }} src={film.image} alt="film image" />
          </div>
        ))}
    </div>
  )
}
