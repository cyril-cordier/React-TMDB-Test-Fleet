import React, {
     useState, useEffect 
} from 'react'
import {useSelector, useDispatch} from 'react-redux';
//import Movies from '../../source/movies.json'
import axios from 'axios'
import {API_KEY, BASE_URL, DEFAULT_IMG, IMAGE_URL} from '../../constant'
import {Container, Row, Button, Col} from 'react-bootstrap'
import './List.css'

export default function MovieList() {
    
    const [initMovie, setInitMovie] = useState([]);;
    const [mDBList, setmDBList] = useState('upcoming')
    
    const {search} = useSelector(state => ({
        ...state.searchReducer
    }));

    const dispatch = useDispatch();


    
    const movieChoice = (movie) => {
        
        
        dispatch({
            type: 'SELECT',
            payload: movie
        })

    }

    const reset = () => {
        dispatch({
            type: 'RESET'
        })

    }

    useEffect(() => {
       
        const initialList = async () => {
            await axios.get(`${BASE_URL}/movie/${mDBList}${API_KEY}`)
            .then(response => {
                setInitMovie(response.data.results)
                //console.log(response.data.results)
            })
            .catch(e => {
                console.log(e)
            })
        };
        initialList();
    }, [mDBList]) 

    
    
    const upcoming = () => {
        reset()
        setmDBList('upcoming');
    }
    const topRated = () => {
        reset()
        setmDBList('top_rated');
    }
    
        return ( 
            <div className="showlist">  
                    <div className="dblists">
                        <Button onClick={upcoming}>Upcoming</Button>
                        <Button onClick={topRated}>Top-Rated</Button>
                    </div>
                <Container className="listcontainer">

                    
                    {{search}.search.map(movie => 
                    <div className="listtitle" key= {movie.id} onClick={() => {movieChoice(movie)}}>
                            <img src={movie.poster_path !== null ? IMAGE_URL + movie.poster_path : DEFAULT_IMG} style={{width:50}}  onClick={() => {movieChoice(movie)}} alt={`poster_${movie.id}`}/>
                        <div className="carddetails">
                            <p className="cardtitle">{movie.title} </p>
                            <p className="carddate">({movie.title&&movie.release_date? movie.release_date.substr(0,4) : ""})</p>
                        </div>
                        
                    </div>
                    )}

                    
                
                
                    {{search}.search.length === 0 ? initMovie.map(movie => 
                        <div className="listtitle" key= {movie.id} onClick={() => {movieChoice(movie)}}>
                            <img  src={movie.poster_path !== null ? IMAGE_URL + movie.poster_path : DEFAULT_IMG} style={{width:50}}  alt={`poster_${movie.id}`}/>
                            <div className="carddetails">
                                <p className="cardtitle">{movie.title} </p>
                                <p className="carddate">{mDBList==="top_rated"&&movie.title&&movie.vote_average!==null? movie.vote_average/2+"/5 - " : ""} {movie.title&&movie.release_date? "("+movie.release_date.substr(0,4)+")" : ""}</p>
                            </div>
                        </div>
                    ) : ""}
                
                </Container>
            </div>
        )
}