import React, {
    useState, useEffect 
} from 'react';
import {useSelector} from 'react-redux'; 
//import Movies from '../../source/movies.json'
import {API_KEY, BASE_URL, IMAGE_URL} from '../../constant'
import InitScreen from '../interface/InitScreen'
import {Link} from 'react-router-dom'
import './CompleteMovieCard.css'


function MovieCard () {
    
    const [youtubeKey, setyoutubeKey] = useState([]);;

    const {selected} = useSelector(state => ({
        ...state.movieReducer
    }));
    
    //const dispatch = useDispatch();
    
    useEffect(() => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(
            `${BASE_URL}/movie/${{selected}.selected.id}/videos${API_KEY}&language=en-US`,
            requestOptions)
          .then(response => response.json())
          
          .then(result => setyoutubeKey(result.results[0].key))
          .catch(error => console.log('error', error))

        //console.log(youtubeKey)
    })

    if({selected}.selected.title) {

        return (
    
            <div className="body">
                <Link to="/Movies" className="btn btn-primary mt-20 back"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg> Back</Link>
                <h4 className="title">{{selected}.selected.title}</h4>
                <img src={IMAGE_URL + {selected}.selected.poster_path} style={{width:180}} alt=""/>
                <p>Release date : {{selected}.selected.release_date}</p>
                <p>Vote average : {{selected}.selected.vote_average / 2} / 5</p>
                <p className="description">{{selected}.selected.overview}</p>
                <iframe title="trailer" className="trailer"  src={`https://www.youtube.com/embed/${youtubeKey}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


            </div>
            
        )
        }else {
            return (
                <React.Fragment>
                    <Link to="/Movies" style={{textDecoration:"none"}}><InitScreen /></Link>
                    <Link to="/Movies" className="btn btn-primary mt-20">Search a movie</Link>
                </React.Fragment>
            )
        }
    
}

/* const mapStateToProps = state => {
    console.log(state.movie)
    return {
        selectedMovie : state.movie
    }
}
 */

export default MovieCard;