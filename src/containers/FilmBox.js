import React, {useState} from 'react'
import FilmList from '../components/FilmList'
const FilmBox = ({title}) => {


    const [movies, setMovies] = useState([
        {
            id: 1,
            name: "Spider-Man: Into the Spider-Verse",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
          },
          {
            id: 2,
            name: "Life Itself",
            url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
          },
          {
            id: 3,
            name: "Mary Queen of Scots",
            url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
          },
          {
            id: 4,
            name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
          },
          {
            id: 5,
            name: "Captain Marvel",
            url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
          }
    ])
    return(
        <div className="film-box">
            <h1>{title}</h1>
            <hr></hr>
            <FilmList movies={movies}/>
            <br></br>
            <hr></hr>
            <p><a id="upcoming-movies" href="https://www.imdb.com/calendar/?region=gb">View Upcoming Movies in UK</a></p>
        </div>
    )
}

export default FilmBox