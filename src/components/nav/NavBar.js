import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
    state = {
        searchTerm: "",
    }

    handleSubmit = e => {
        e.preventDefault()
        const keyPressed = e.keyCode
        // user hits 'Enter' key
        if (keyPressed === 13){
            this.props.history.push(`/search/q=${this.state.searchTerm}`)
        }
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/');
    }

    render(){
        return (
            <header>
                <h1 className="site-title">Student Kennels<br />
                    <small>Loving care when you're not there.</small>
                </h1>
                <nav>
                    {this.props.user && <input className="nav-search"
                        id="searchTerm"
                        placeholder="search"
                        onChange={this.handleFieldChange}
                        onKeyUp={this.handleSubmit}
                    />}
                    <ul className="container">
                        <li><NavLink activeClassName="selectedLink" className="nav-link" to="/" exact>Home</NavLink></li>
                        <li><NavLink activeClassName="selectedLink" className="nav-link" to="/locations">Locations</NavLink></li>
                        {(this.props.user) ? 
                            <>
                                <li><NavLink activeClassName="selectedLink" className="nav-link" to="/animals">Animals</NavLink></li>
                                <li><NavLink activeClassName="selectedLink" className="nav-link" to="/employees">Employees</NavLink></li>
                                <li><NavLink activeClassName="selectedLink" className="nav-link" to="/owners">Owners</NavLink></li>
                                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                            </> : 
                            <>
                                <li><NavLink activeClassName="selectedLink" className="nav-link" to="/login">Login</NavLink></li>
                            </>
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(NavBar);