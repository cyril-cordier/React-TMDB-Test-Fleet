import React from 'react'
import Search from "../tools/search";
import List from '../movies/List'
import MovieCard from '../movies/MovieCard'
import {Container, Row, Col} from 'react-bootstrap'



export default function Movies() {
    return (
        <Container>
            <Row>
                <Col>
                    <Search />
                    <List />
                </Col>
                <Col><MovieCard /></Col>
            </Row>
        </Container>
    )
}
