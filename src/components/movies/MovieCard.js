import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
//import Movies from '../../source/movies.json'
const IMAGE_URL = 'https://image.tmdb.org/t/p/original' 

 function MovieCard (props) {

    

    return (
        <div>
            
            {/* <h4>{this.props.title}</h4>
            <p>{this.props.overview}</p>
            <p>{this.props.vote_average / 2} / 5</p>
            <img src={IMAGE_URL + this.props.poster_path} style={{width:180}} alt=""/> */}
            


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