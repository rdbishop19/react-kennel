import React, { useEffect, useState } from 'react'
import ApiManager from '../../modules/ApiManager'

function SearchResults(props) {
    const [locations, setLocations] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [owners, setOwners] = useState([]);
    const [animals, setAnimals] = useState([]);

    console.log('locations', locations)

    const searchTerm = props.match.params.searchTerm
    useEffect(() => {
        ApiManager.getAll(`locations?q=${searchTerm}`)
        .then(data => {
            // console.log('location data', data)
            setLocations(data)
        })
        ApiManager.getAll(`employees?q=${searchTerm}`)
        .then(data => {
            // console.log('employee data', data)
            setEmployees(data)
        })
        ApiManager.getAll(`owners?q=${searchTerm}`)
        .then(data => {
            // console.log('owner data', data)
            setOwners(data)
        })
        ApiManager.getAll(`animals?q=${searchTerm}`)
        .then(data => {
            // console.log('animal data', data)
            setAnimals(data)
        })
    }, [searchTerm]);
    
    return(
        <React.Fragment>
            <h2>Search Results</h2>
            <h3>Animals</h3>
            {animals.length ?
            animals.map((result)=> {
                return <p key={result.id}>{result.name}</p>
            }) : <p>No results</p>}
            <h3>Locations</h3>
            {locations.length ? locations.map((result)=> {
                return <p key={result.id}>{result.name}</p>
            }) : <p>No results</p>}
            <h3>Employees</h3>
            {employees.length ? employees.map((result)=> {
                return <p key={result.id}>{result.name}</p>
            }) : <p>No results</p>}
            <h3>Owners</h3>
            {owners.length ? owners.map((result)=> {
                return <p key={result.id}>{result.name}</p>
            }) : <p>No results</p>}
        </React.Fragment>
    )
}

export default SearchResults