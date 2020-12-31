import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {Navbar, Nav} from 'react-bootstrap'

export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand >
                    <Link to="/" className="navbar-brand">MovieDatabase</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link >
                            <Link to="/Movies" className="nav-link">Movies</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/Details" className="nav-link">Movie Detail</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/about" className="nav-link">About</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}
