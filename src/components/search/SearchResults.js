import React, { useEffect, useState } from 'react';
import ApiManager from '../../modules/ApiManager';
import { SearchResultCard } from './SearchResultCard';

function SearchResults(props) {
	const [ locations, setLocations ] = useState([]);
	const [ employees, setEmployees ] = useState([]);
	const [ owners, setOwners ] = useState([]);
	const [ animals, setAnimals ] = useState([]);

	const searchTerm = props.match.params.searchTerm;
	const getSearchResults = () => {
		ApiManager.getAll(`locations?q=${searchTerm}`).then((data) => {
			setLocations(data);
		});
		ApiManager.getAll(`employees?q=${searchTerm}`).then((data) => {
			setEmployees(data);
		});
		ApiManager.getAll(`owners?q=${searchTerm}`).then((data) => {
			setOwners(data);
		});
		ApiManager.getAll(`animals?q=${searchTerm}`).then((data) => {
			setAnimals(data);
		});
	};
	useEffect(getSearchResults, [ searchTerm ]);

	return (
		<React.Fragment>
			<h2>Search Results</h2>
			<h3>Animals</h3>
			{animals.length ? (
				animals.map((result) => {
                    return <SearchResultCard key={result.id} path="animals" item={result} {...props} />
				})
			) : (
				<p>No results</p>
			)}
			<h3>Locations</h3>
			{locations.length ? (
				locations.map((result) => {
                    return <SearchResultCard key={result.id} path="locations" item={result} {...props} />
				})
			) : (
				<p>No results</p>
			)}
			<h3>Employees</h3>
			{employees.length ? (
				employees.map((result) => {
                    return <SearchResultCard key={result.id} path="employees" item={result} {...props} />
				})
			) : (
				<p>No results</p>
			)}
			<h3>Owners</h3>
			{owners.length ? (
				owners.map((result) => {
                    return <SearchResultCard key={result.id} path="owners" item={result} {...props} />
				})
			) : (
				<p>No results</p>
			)}
		</React.Fragment>
	);
}

export default SearchResults;
