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
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeEditForm from './employee/EmployeeEditform'
import LocationEditForm from './location/LocationEditForm'
import OwnerEditForm from './owner/OwnerEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import SearchResults from './search/SearchResults'
class ApplicationViews extends Component {
    
    render() {
        return (
            <>
                <Route path="/login" render={props => {
                    return <Login setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />


                <Route exact path="/animals" render={(props) => {
                    return this.props.user ?
                        <AnimalList {...props}/> :
                        <Redirect to="/login" />
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    //Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)}{...props} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />
                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    return <AnimalEditForm {...props} />
                }} />


                <Route exact path="/locations" render={(props) => {
                    return <LocationList {...props}/>
                }} />
                <Route exact path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)}{...props} />
                }} />
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props} />
                }} />
                <Route path="/locations/:locationId(\d+)/edit" render={(props) => {
                    return <LocationEditForm {...props} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    return this.props.user ? 
                        <EmployeeList {...props}/> : 
                        <Redirect to="/login" />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} />
                }} />
                <Route path="/employees/:employeeId(\d+)/edit" render={ props => {
                    return <EmployeeEditForm {...props} />
                }} />
                 <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
                    return <EmployeeWithAnimals {...props} />
                }} />


                <Route exact path="/owners" render={(props) => {
                    return this.props.user ?
                        <OwnerList {...props}/> :
                        <Redirect to="/login" />
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} />
                }} />
                <Route path="/owners/:ownerId(\d+)/edit" render={(props) => {
                    return <OwnerEditForm {...props} />
                }} />

                <Route path="/search/q=:searchTerm" render={(props) => {
                    return <SearchResults {...props} />
                }} />
            </>
        )
    }
}

export default ApplicationViews