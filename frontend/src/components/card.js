import React, { useState, useEffect } from "react"
import styled from "styled-components"
import api from "../api"
import uuid from "uuid/dist/v4"
import { mobile, medium, normal, large } from "./size.json"
import { Card, CardDeck } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const CardWrapper = styled.div`
  font-size: 30px;
  margin-top: 5%;
  display: grid;
  gap: 10px 10px;
  @media ${mobile} {
    grid-template-columns: 1fr;
  }
  @media ${medium} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${normal} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media ${large} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`

export const FilmCard = () => {
  // State
  const [isLoading, setLoading] = useState(true)
  const [films, setFilms] = useState([])
  const [error, setError] = useState(false)
  const [viewingFilm, setViewingFilm] = useState(false)
  const filmTitle = []

  // Get films
  const getFilms = async () => {
    await api
      .get("Top250Movies/k_t3mv9452") //
      .then(response => {
        if (response.data.errorMessage === "") {
          setFilms(response.data.items.splice(0, 52))
          setLoading(false)
          console.log(response)
        } else {
          try {
            const getAgain = async () => {
              await api.get("Top250Movies/k_zc0xrv4c").then(response => {
                setFilms(response.data.items.splice(0, 52))
                setLoading(false)
                console.log(response)
              })
            }
            getAgain()
          } catch (error) {
            setLoading(false)
            setError(true)
            films.push("sorry there was a error try again : (")
          }
        }
      })
  }

  useEffect(() => {
    getFilms()
  }, [])
  const filmView = []
  return (
    <div>
      {/* {viewingFilm && <p>{filmView[0].data.fullCast.title}</p>} */}
      <CardWrapper>
        {error ? (
          films[0]
        ) : isLoading ? (
          <h1>Loading....</h1>
        ) : (
          films.map(film => (
            <CardDeck key={uuid()}>
              <Card
                onClick={() => {
                  filmTitle.length = 0
                  filmTitle.push(film.id)
                  api
                    .get(
                      `Title/k_t3mv9452/${filmTitle}/FullActor,FullCast,Posters,Images,Trailer,Ratings,`
                    )
                    .then(response => {
                      console.log(response)
                      setViewingFilm(!viewingFilm)
                      filmView.push(response)
                      console.log(filmView)
                    })
                  console.log(filmTitle)
                }}
                key={uuid()}
                style={{
                  width: "17rem",
                  cursor: "pointer",
                }}
                className="mb-10"
              >
                <Card.Img
                  variant="top"
                  src={film.image}
                  style={{ height: "400px" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "30px" }}>
                    {film.title}
                  </Card.Title>
                  <Card.Text>
                    Rating {film.imDbRating}/10 Year {film.year}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          ))
        )}
      </CardWrapper>
    </div>
  )
}
