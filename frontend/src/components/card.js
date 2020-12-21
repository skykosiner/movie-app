import Card from "react-bootstrap/Card"
import React, { useState, useEffect } from "react"
import api from "../api"
import uuid from "uuid/dist/v4"

export const CardFilms = () => {
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
          <Card key={uuid()}>
            <Card.Img
              variant="top"
              key={uuid()}
              style={{ width: "100px" }}
              src={film.image}
              alt="movie poster"
            />
            <Card.Body
              variant="primary"
              key={uuid()}
              className="flex flex-jc-c flex-jc-sb"
            >
              {film.fullTitle}
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  )
}
