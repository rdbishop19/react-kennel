import React, { Component } from 'react'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Kennel.css'
import ApiManager from '../modules/ApiManager';
class Kennel extends Component {
    state = {
      user: false,
      searchTerm: "",
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

    searchForTerm = () => {
      
    }

    clearUser = () => {
        // localStorage.clear()
        localStorage.removeItem("credentials")
        this.setState({ user: this.isAuthenticated() })
    }
    
    componentDidMount(){
      this.setState({
        user: this.isAuthenticated()
      })
    }

  render() {
    return (
      <>
        <NavBar user={this.state.user} 
                clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser}
                          searchTerm={this.searchTerm} />
      </>
    )
  }
}

export default Kennel