import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'

import Home from './home/Home'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationDetail from './location/LocationDetail'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'

class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null
    
    render() {
        return (
            <>
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return this.isAuthenticated() ?
                        <AnimalList {...props}/> :
                        <Redirect to="/login" />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    //Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)}{...props} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />
                <Route exact path="/locations" render={(props) => {
                    return this.isAuthenticated() ?
                        <LocationList {...props}/> :
                        <Redirect to="/login" />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)}{...props} />
                }} />
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props} />
                }}/>
                <Route exact path="/employees" render={(props) => {
                    return this.isAuthenticated() ? 
                        <EmployeeList {...props}/> : 
                        <Redirect to="/login" />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return this.isAuthenticated() ?
                        <OwnerList {...props}/> :
                        <Redirect to="/login" />
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} />
                }} />
            </>
        )
    }
}

export default ApplicationViews