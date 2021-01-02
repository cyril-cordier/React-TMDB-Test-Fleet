import React from 'react'
import {Link} from 'react-router-dom'

export default function Erreur() {
    return (
        <div>
            <h1 className="display-3">Error 404 : page not found.</h1>
            <Link to="/Movies" className="btn btn-primary mt-20">Press to return in the app</Link>
        </div>
    )
}
