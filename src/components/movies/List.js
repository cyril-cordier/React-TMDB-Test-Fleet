import React, {
     useState, useEffect 
} from 'react'
import {useSelector, useDispatch} from 'react-redux';
//import Movies from '../../source/movies.json'
import axios from 'axios'
import {API_KEY, BASE_URL, IMAGE_URL} from '../../constant'

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
            await axios.get(`${BASE_URL}/movie/upcoming${API_KEY}`)
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
            <React.Fragment className="columns">  
                {{search}.search.map(movie => 
                <div  key= {movie.id} onClick={() => {movieChoice(movie)}}>
                    <img className="column" src={IMAGE_URL + movie.poster_path} style={{width:50}}  onClick={() => {movieChoice(movie)}}/>
                    <p className="column">{movie.title} ({movie.title? movie.release_date.substr(0,4) : ""})</p>
                </div>
                )}
                
                
                {{search}.search.length === 0 ? initMovie.map(movie => 
                    <div key= {movie.id} onClick={() => {movieChoice(movie)}}>
                        <img  src={IMAGE_URL + movie.poster_path} style={{width:50}} />
                        <p >{movie.title} ({movie.title? movie.release_date.substr(0,4) : ""})</p>
                    </div>
                ) : ""}
                
            </React.Fragment>
        )
}