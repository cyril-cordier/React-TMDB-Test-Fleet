import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                <div className="container">
                    <Link to="/" className="navbar-brand">MovieDatabase</Link>
                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item d-inline-block mr-2">
                        <Link to="/Movies" className="nav-link">Movies</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                        <Link to="/Details" className="nav-link">Movie Detail</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                        <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
