import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                <div className="container">
                    <a href="/Movies" className="navbar-brand">MovieDatabase</a>
                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item d-inline-block mr-2">
                        <Link to="/Movies" className="nav-link">Films</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                        <Link to="/Details" className="nav-link">Detail Film</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                        <Link to="/about" className="nav-link">A propos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
