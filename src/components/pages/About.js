import React, { Component } from 'react'
import './About.css';

export default class About extends Component {

    state = {
        version : "1.0.0",
        vReact : "17.0.1",
        vBootstrap : "4.5.3", 
        by : "Cyril CORDIER", 
        comments : "Merci à Benjamin Brizzi et à Fleet pour ce test, l'occasion de mieux prendre en main React, ses hooks, son state management... ", 
        github : "https://github.com/cyril-cordier/React-TMDB-Test-Fleet",

    }

render(){

    return (
        <div className="about">
            <h1 className="display-4 m-5">Les détails de l'App...</h1>
            <p className="lead">Version {this.state.version}</p>
            <p className="lead">Développé avec React v.{this.state.vReact}</p>
            <p className="lead">CSS Bootstrap v.{this.state.vBootstrap}</p>
            <p className="lead">par {this.state.by}</p>
            <p className="lead mt-5">Repo Github disponible sur :<a href={this.state.github} target="blank"> {this.state.github}</a></p>
            <p className="lead mt-5"> {this.state.comments}</p>

            
        </div>
    )
}
}
