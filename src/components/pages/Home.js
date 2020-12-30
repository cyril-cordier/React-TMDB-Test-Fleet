import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div>
            <h1 className="display-4 mt-5 mb-5">Welcome to The MovieDatabase App</h1>
            <Link to="/List" className="btn btn-primary mb-5">Press to Enter</Link>
        </div>
    )
}
