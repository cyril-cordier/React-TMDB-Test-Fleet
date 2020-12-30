import React, {
     useState, useEffect 
} from 'react'
import {useSelector, useDispatch} from 'react-redux';
//import Movies from '../../source/movies.json'
import axios from 'axios'
import MovieCard from './MovieCard'
import Search from '../tools/search'
import {API_KEY, BASE_URL} from '../../constant'

export default function MovieList() {
    
    const [initMovie, setInitMovie] = useState([]);;
    const [selectedMovie, setSelectedMovie] = useState([]);
    
    const {movieSelected, search} = useSelector(state => ({
        ...state.movieSelectedReducer,
        ...state.searchReducer
    }))
    const dispatch = useDispatch();

    
    useEffect(() => {
        console.log("useEffect selected", selectedMovie);
        dispatch({
            type: 'SELECT',
            payload: selectedMovie
        })

    }, [selectedMovie])
     
    const movieChoice = (movie) => {
        
        setSelectedMovie(movie);
    }
    /*searchMyMovie = () => {
        return (
            this.movies.setState()
        )
    } */
    useEffect(() => {
        const initialList = async () => {
            await axios.get(`${BASE_URL}/movie/upcoming${API_KEY}`)
            .then(response => {
                setInitMovie(response.data.results)
                console.log(response.data.results)
            })
            .catch(e => {
                console.log(e)
            })
        };
        initialList();
    }, []) 
    
        return ( 
            <div>
                <Search />
                
                {{search}.search.map(movie => <p key= {movie.id} onClick={() => {movieChoice(movie)}}>{movie.title} ({movie.title? movie.release_date.substr(0,4) : ""})</p>)}
                {{search}.search.length === 0 ? initMovie.map(movie => <p key= {movie.id} onClick={() => {movieChoice(movie)}}>{movie.title} ({movie.title? movie.release_date.substr(0,4) : ""})</p>) : ""}

            </div>
        )
}