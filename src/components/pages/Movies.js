import React from 'react'
import List from '../movies/List'
import MovieCard from '../movies/MovieCard'

export default function Movies() {
    return (
        <div>
            <List />
            <MovieCard 
            title="titre"
            image="image"
            rating="note"
            details="description"/>
        </div>
    )
}
