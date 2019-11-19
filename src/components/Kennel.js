import React, { Component } from 'react'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Kennel.css'
class Kennel extends Component {
    render() {
        return (
            <>
                <NavBar />
                <ApplicationViews />
            </>
        );
    }
}

export default Kennel