import React, {
     useState, useEffect 
} from 'react'
import Movies from '../../source/movies.json'
import axios from 'axios'
import {connect} from 'react-redux';
import MovieCard from './MovieCard'

const api_key = "612b8c457fd937136c063352f41e09ca"

function MovieList() {
    
    const [term, setTerm] = useState("");
    const [mydata, setData] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);

    
    
    useEffect(() => {
        const search = async () => {
            await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=612b8c457fd937136c063352f41e09ca&query=${term}`)
            .then(response => {
                setData(response.data.results)
            })
            .catch(e => {
                console.log(e)
            })
        }
        search()
        console.log(mydata.map(movie => movie.title))
        
    }, [term])

    
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
    
    
    

        return ( 
            <div>
                <form>
                    <label htmlFor="search">Recherche</label>
                    <input 
                    type="text"
                    name="search"
                    placeholder="Chercher un film"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    />
                </form>
                {/* {Movies.results.map(movie => (<h4 key= {movie.id} onClick={() => {this.movieChoice(movie)}}>{movie.title}</h4>))} */}
                {/* {Movies.results.map(movie => (<h4 key= {movie.id} onClick={() => {this.movieChoice(movie)}}>{movie.title}</h4>))} */}
                {/* {this.state.movies.map(movie => (<p key= {movie.id}>{movie.title}</p>))} */}
                {/* <p>{this.props.mySearch}</p> */}
                {/* <p>{this.state.movies.poster_path}</p> */}
                {mydata.map(movie => <p key= {movie.id} onClick={() => {movieChoice(movie)}}>{movie.title} ({movie.title? movie.release_date.substr(0,4) : ""})</p>)}
                {/* {selectedMovie !== [] ? <MovieCard 
        title={selectedMovie.title}
        overview={selectedMovie.overview}
        vote_average={selectedMovie.vote_average}
        poster_path={selectedMovie.poster_path}
        /> : ""} */}
            </div>
        )
    }


const mapStateToProps = state => {
    return {
        mySearch : state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        select : () => dispatch({type : 'SELECTED'})
    }
}

/* const mapDispatchToProps = dispatch => {
    return {
        searchMovie : () => dispatch({type : 'SEARCH'})
    }
}
 */

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);