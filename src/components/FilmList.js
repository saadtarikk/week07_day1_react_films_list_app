import React, {useState} from 'react'
import Film from './Film'


const FilmList = ({movies}) => {

    const movieNodes = movies.map((movie)  => {
        return <Film key = {movie.id} name={movie.name} url={movie.url} />

    })

    return(
        <div className="film-list">
        <h1>Movies List</h1>
        <p>{movieNodes}</p>
        </div>
    )
}

export default FilmList