import axios from 'axios'
import SearchAppBar from '../AppBar/SearchAppBar'
import MovieCard from '../MovieCard/MovieCard'
import { useEffect, useState } from 'react'

import './Home.css'

const API_KEY = '19396115'

const SINGLE_MOVIE = {
  Actors: 'Michael Keaton, Jack Nicholson, Kim Basinger',
  Awards: 'Won 1 Oscar. 9 wins & 26 nominations total',
  BoxOffice: '$251,409,241',
  Country: 'United States, United Kingdom',
  DVD: '22 Aug 1997',
  Director: 'Tim Burton',
  Genre: 'Action, Adventure',
  Language: 'English, French, Spanish',
  Metascore: '69',
  Plot:
    'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
  Production: 'N/A',
  Rated: 'PG-13',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '7.5/10' },
    { Source: 'Rotten Tomatoes', Value: '72%' },
    { Source: 'Metacritic', Value: '69/100' },
  ],
  Released: '23 Jun 1989',
  Response: 'True',
  Runtime: '126 min',
  Title: 'Batman',
  Type: 'movie',
  Website: 'N/A',
  Writer: 'Bob Kane, Sam Hamm, Warren Skaaren',
  Year: '1989',
  imdbID: 'tt0096895',
  imdbRating: '7.5',
  imdbVotes: '367,101',
}

const SAMPLE_MOVIES = [SINGLE_MOVIE, SINGLE_MOVIE, SINGLE_MOVIE]

interface MovieRating {
  Source: string
  Value: string
}

interface MovieData {
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: MovieRating[]
  Released: string
  Response: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbVotes: string
}

export default function Home() {
  // const [movies, setMovies] = useState<MovieData[] | null>()

  // useEffect(() => {
  //   ;(async () => {
  //     const movieData = await getMovieDetails('batman')
  //     const movieArray = []

  //     for (let i = 0; i < 5; i++) {
  //       movieArray.push(movieData)
  //     }

  //     console.log(movieArray)

  //     setMovies(movieArray)
  //   })()
  // }, [])

  return (
    <>
      <SearchAppBar />
      <div className="homeCard__container">
        {SAMPLE_MOVIES?.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              index={index}
              title={movie.Title}
              type={movie.Type}
              year={movie.Year}
              plot={movie.Plot}
            />
          )
        })}
      </div>
    </>
  )
}

const getMovieDetails = async (title: string): Promise<MovieData> => {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`
  const response = await axios.get(url)
  return response.data
}
