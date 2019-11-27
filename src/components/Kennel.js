import React, { Component } from 'react'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Kennel.css'
class Kennel extends Component {
    state = {
      user: false,
      mounted: false,
    }

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    setUser = (authObj) => {
      /*
        For now, just store the email and password that
        the customer enters into local storage.
      */
      localStorage.setItem(
        "credentials",
        JSON.stringify(authObj)
      )
      this.setState({
        user: this.isAuthenticated()
      });
    }

    clearUser = () => {
        // localStorage.clear()
        localStorage.removeItem("credentials")
        this.setState({ user: this.isAuthenticated() })
    }
    
    componentDidMount(){
      this.setState({
        user: this.isAuthenticated(),
        mounted: true,
      })
    }

  render() {
    return (
      <>
        <NavBar user={this.state.user} 
                clearUser={this.clearUser} />
        {
          this.state.mounted ? 
          
          <ApplicationViews user={this.state.user} setUser={this.setUser} /> : 

          <div className="loading">
            <br/>
            <FontAwesomeIcon icon={faSpinner} spin size="5x"/>
          </div>
        }
      </>
    )
  }
}

export default Kennel