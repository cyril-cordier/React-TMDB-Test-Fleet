import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div>

            <div className="home">
                <h1 className="display-4 mt-5 mb-5">Welcome to The MovieDatabase App</h1>
                <Link to="/Movies" ><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" height="200px" alt="TMDB"/></Link>
            </div>
                <Link to="/Movies" className="btn btn-primary mt-20">Press to Enter</Link>
        
        </div>
    )
}
