import React from 'react'
import Search from "../tools/search";
import List from '../movies/List'
import MovieCard from '../movies/MovieCard'

export default function Movies() {
    return (
        <div>
            <Search />
            <List />
            <MovieCard />
        </div>
    )
}
