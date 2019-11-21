import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
    render(){
        return (
            <header>
                <h1 className="site-title">Student Kennels<br />
                    <small>Loving care when you're not there.</small>
                </h1>
                <nav>
                    <ul className="container">
                        <li><NavLink activeClassName="selectedLink" className="nav-link" to="/" exact>Home</NavLink></li>
                        <li><NavLink activeClassName="selectedLink" className="nav-link" to="/animals">Animals</NavLink></li>
                        <li><NavLink activeClassName="selectedLink" className="nav-link" to="/locations">Locations</NavLink></li>
                        <li><NavLink activeClassName="selectedLink" className="nav-link" to="/employees">Employees</NavLink></li>
                        <li><NavLink activeClassName="selectedLink" className="nav-link" to="/owners">Owners</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;