import React, { Component } from 'react'

export default class About extends Component {

    state = {
        version : "1.0.0",
        vReact : "17.0.1",
        vBootstrap : "4.5.3", 
        by : "Cyril CORDIER"

    }

render(){

    return (
        <div>
            <h1 className="display-4">Les détails de l'App...</h1>
            <p className="lead">Version {this.state.version}</p>
            <p className="lead">Développé avec React v.{this.state.vReact}</p>
            <p className="lead">CSS Bootstrap v.{this.state.vBootstrap}</p>
            <p className="lead">par {this.state.by}</p>
            
        </div>
    )
}
}
