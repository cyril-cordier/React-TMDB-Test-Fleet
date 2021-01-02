import React from 'react'
import Search from "../tools/search";
import List from '../movies/List'
import MovieCard from '../movies/MovieCard'
import {Container, Col} from 'react-bootstrap'
import './Movies.css'



export default function Movies() {
    return (
        <Container>
            <div className="bodymovie">
                <div className="searchlistcomponent">
                    <Search />
                    <List />
                </div>
                <div><MovieCard /></div>
            </div>
        </Container>
    )
}
