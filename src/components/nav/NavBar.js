import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './NavBar.css'

/* render(){
  return (
    <header>
    <h1 className="site-title">Student Kennels<br />
        <small>Loving care when you're not there.</small>
    </h1>
    <nav>
        <ul className="container">
        <li><Link className="nav-link" to="/">Home</Link></li>
        {(this.props.user) ?
            <li><Link className="nav-link" to="/animals">Animals</Link></li>
        : null }
        <li>Locations</li>
        <li><Link className="nav-link"  to="/employees">Employees</Link></li>
        <li>Owners</li>
        : <li><Link className="nav-link" to="/login">Login</Link></li>
        </ul>
    </nav>
    </header>
  )
} */
class NavBar extends Component {

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
                    <ul className="container">
                        <li><NavLink activeClassName="selectedLink" className="nav-link" to="/" exact>Home</NavLink></li>
                        <li><NavLink activeClassName="selectedLink" className="nav-link" to="/locations">Locations</NavLink></li>
                        {(this.props.user) ? 
                            <>
                                <li><NavLink activeClassName="selectedLink" className="nav-link" to="/animals">Animals</NavLink></li>
                                <li><NavLink activeClassName="selectedLink" className="nav-link" to="/employees">Employees</NavLink></li>
                                <li><NavLink activeClassName="selectedLink" className="nav-link" to="/owners">Owners</NavLink></li>
                                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li> :
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