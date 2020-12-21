import React, { useState, useEffect } from "react"
import api from "../api"

export const Card = () => {
  // State
  const [isLoading, setLoading] = useState(true)
  const [films, setFilms] = useState([])

  // Get films
  const getFilms = async () => {
    await api.get().then(response => {
      setFilms(response.data.items.splice(0, 50))
      setLoading(false)
    })
  }

  useEffect(() => {
    getFilms()
  }, [])
  return (
    <div style={{ position: "absolute", fontSize: "30px" }}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        films.map(film => (
          <p>
            {film.fullTitle}
            <img
              style={{ width: "100px" }}
              src={film.image}
              alt="movie poster"
            />
          </p>
        ))
      )}
    </div>
  )
}
