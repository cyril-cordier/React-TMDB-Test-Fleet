import React from 'react';
import {useSelector} from 'react-redux'; 
//import Movies from '../../source/movies.json'
import {IMAGE_URL} from '../../constant'
import {Container, Row, Col} from 'react-bootstrap'
import './MovieCard.css'
import {Link} from 'react-router-dom'
import InitScreen from '../interface/InitScreen'

function MovieCard () {
    
    const {selected} = useSelector(state => ({
        ...state.movieReducer
    }));
    
    //const dispatch = useDispatch();
    
    if({selected}.selected.title) {

        return (
            <Container>
                <div className="moviecard">
                    <Row>
                        <Col>
                            <img src={IMAGE_URL + {selected}.selected.poster_path} style={{width:180}} alt=""/>
                        </Col>
                        <Col className='title'>
                            <h1>{{selected}.selected.title}</h1>
                            <p>Vote average : {{selected}.selected.vote_average / 2} / 5</p>
                            <p>Release year : {{selected}.selected.title? {selected}.selected.release_date.substr(0,4) : ""}</p>
                        </Col>
                    </Row>
                    <p className='description'>{{selected}.selected.title? {selected}.selected.overview.substr(0, 100) : ""}[...]</p>
                    <Link to="/Details" className="btn btn-primary mb-5">More informations</Link>

                </div>
            
            </Container>
        )
    }else {
        return (
            <InitScreen />
        )
    }
    
}


export default MovieCard;