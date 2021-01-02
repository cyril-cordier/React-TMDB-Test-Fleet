import React from 'react'
import './InitScreen.css'

export default function InitScreen() {
    return (
        <div className="initscreen">
                <h1>Choose a movie...</h1>
                <img className="initpicture" src="https://blog.dataiku.com/hs-fs/hubfs/Dataiku%20Dec%202016/Image/keep-calm-and-choose-your-movie-wisely-400.jpg?width=400&name=keep-calm-and-choose-your-movie-wisely-400.jpg" alt="choose_a_movie" />
            
                <h1>Or search it...</h1>
                <img className="initpicture" src="https://cdn.pixabay.com/photo/2020/06/08/19/26/find-5275842_960_720.png" height="350px" alt="search_a_movie" />

        </div>
    )
}
