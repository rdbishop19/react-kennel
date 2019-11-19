import { Route } from 'react-router-dom'
import React, { Component } from 'react'

import Home from './home/Home'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationDetail from './location/LocationDetail'

class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}/>
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    //Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)}{...props} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />
                <Route exact path="/locations" render={(props) => {
                    return <LocationList />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)}{...props} />
                }}
                />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList />
                }} />
            </>
        )
    }
}

export default ApplicationViews