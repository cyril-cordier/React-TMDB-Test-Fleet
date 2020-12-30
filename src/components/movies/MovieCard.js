import React from 'react';
import {useSelector} from 'react-redux'; 
//import Movies from '../../source/movies.json'
import {IMAGE_URL} from '../../constant'


function MovieCard () {
    
    const {selected} = useSelector(state => ({
        ...state.movieReducer
    }));
    
    //const dispatch = useDispatch();
    

    return (
        <div>
            
            <h1>{{selected}.selected.title}</h1>
            <p>Année de sortie : {{selected}.selected.title? {selected}.selected.release_date.substr(0,4) : ""}</p>
            <p>{{selected}.selected.overview}</p>
            <p>{{selected}.selected.vote_average / 2} / 5</p>
            <img src={IMAGE_URL + {selected}.selected.poster_path} style={{width:180}} alt=""/>
            


        </div>
    )
    
}

/* const mapStateToProps = state => {
    console.log(state.movie)
    return {
        selectedMovie : state.movie
    }
}
 */

export default MovieCard;