import React, {
     useState, useEffect 
} from 'react'
import {useSelector, useDispatch} from 'react-redux';
//import Movies from '../../source/movies.json'
import axios from 'axios'
import {API_KEY, BASE_URL, DEFAULT_IMG, IMAGE_URL} from '../../constant'
import {Container, Row} from 'react-bootstrap'
import './List.css'

export default function MovieList() {
    
    const [initMovie, setInitMovie] = useState([]);;
    
    const {search} = useSelector(state => ({
        ...state.searchReducer
    }));

    const dispatch = useDispatch();


    
    const movieChoice = (movie) => {
        
        
        dispatch({
            type: 'SELECT',
            payload: movie
        })

        console.log("redux selected", movie.poster_path)
    }

    useEffect(() => {
        const initialList = async () => {
            await axios.get(`https://${BASE_URL}/movie/upcoming${API_KEY}`)
            .then(response => {
                setInitMovie(response.data.results)
                //console.log(response.data.results)
            })
            .catch(e => {
                console.log(e)
            })
        };
        initialList();
    }, []) 
    
        return ( 
            <React.Fragment className="showlist">  
                <Container className="listcontainer">
                    
                    {{search}.search.map(movie => 
                    <Row key= {movie.id} onClick={() => {movieChoice(movie)}}>
                        
                            <img src={movie.poster_path !== null ? IMAGE_URL + movie.poster_path : DEFAULT_IMG} style={{width:50}}  onClick={() => {movieChoice(movie)}} alt={`poster_${movie.id}`}/>
                            <p>{movie.title} ({movie.title? movie.release_date.substr(0,4) : ""})</p>
                        
                    </Row>
                    )}

                    
                
                
                    {{search}.search.length === 0 ? initMovie.map(movie => 
                        <Row key= {movie.id} onClick={() => {movieChoice(movie)}}>
                            <img  src={movie.poster_path !== null ? IMAGE_URL + movie.poster_path : DEFAULT_IMG} style={{width:50}}  alt={`poster_${movie.id}`}/>
                            <p>{movie.title} ({movie.title? movie.release_date.substr(0,4) : ""})</p>
                        </Row>
                    ) : ""}
                
                </Container>
            </React.Fragment>
        )
}