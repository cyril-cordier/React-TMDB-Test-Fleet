import React, {
    useState, useEffect 
} from 'react';
import {useSelector} from 'react-redux'; 
//import Movies from '../../source/movies.json'
import {API_KEY, BASE_URL, IMAGE_URL} from '../../constant'
import InitScreen from '../interface/InitScreen'
import {Link} from 'react-router-dom'


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
            `https://${BASE_URL}/movie/${{selected}.selected.id}/videos${API_KEY}&language=en-US`,
            requestOptions)
          .then(response => response.json())
          
          .then(result => setyoutubeKey(result.results[0].key))
          .catch(error => console.log('error', error))

        //console.log(youtubeKey)
    })

    if({selected}.selected.title) {

        return (
    
            <React.Fragment>
                
                <h4>{{selected}.selected.title}</h4>
                <p>{{selected}.selected.overview}</p>
                <p>{{selected}.selected.vote_average / 2} / 5</p>
                <img src={IMAGE_URL + {selected}.selected.poster_path} style={{width:180}} alt=""/>
                <iframe title="trailer" height="315" width="560"  src={`https://www.youtube.com/embed/${youtubeKey}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            </React.Fragment>
            
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