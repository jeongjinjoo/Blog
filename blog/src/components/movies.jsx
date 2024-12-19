import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, vote_average}) {
    return (
        <div className='movie-container'>
            <img src={IMAGE_BASE_URL + poster_path} alt="영화포스터"/>

            <div className='movie-info'>
                <h4>{title}</h4>
                <span>🏆   {vote_average}</span>
            </div>

        </div>
    )
}