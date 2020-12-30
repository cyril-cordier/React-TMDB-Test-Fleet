import React, {
     useState, useEffect 
} from 'react'
import {useSelector, useDispatch} from 'react-redux';
//import Movies from '../../source/movies.json'
import axios from 'axios'
import MovieCard from './MovieCard'
import Search from '../tools/search'



const api_key = "612b8c457fd937136c063352f41e09ca"

export default function MovieList() {
    
    const [initMovie, setInitMovie] = useState([]);
    const [mydata, setData] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);
    
    const {movieSelected, search} = useSelector(state => ({
        ...state.movieSelectedReducer,
        ...state.searchReducer
    }))
    const dispatch = useDispatch();
    const showList = () => {
            
        }
    
    useEffect(() => {
        /* const search = async () => {
            await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=612b8c457fd937136c063352f41e09ca&query=${search}`)
            .then(response => {
                setData(response.data.results)
                console.log(response.data.results)
            })
            .catch(e => {
                console.log(e)
            })
        }
        search()*/

        

        showList()
        //console.log(mydata.map(movie => movie.title)) 
    }, [mydata])

    
    useEffect(() => {
        console.log("selected", selectedMovie);
        

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
            await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=612b8c457fd937136c063352f41e09ca`)
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