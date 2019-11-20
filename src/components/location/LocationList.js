import React, { Component } from 'react';
import LocationCard from './LocationCard';
import ApiManager from '../../modules/ApiManager';

class LocationList extends Component {
	state = {
		locations: []
	};

	componentDidMount() {
		ApiManager.getAll('locations').then((locations) => {
			this.setState({
				locations: locations
			});
		});
	}

	deleteLocation = (id) => {
		ApiManager.delete(id, 'locations').then(() => {
			ApiManager.getAll('locations').then((newLocations) => {
				this.setState({
					locations: newLocations
				});
			});
		});
	};

	render() {
		return (
			<>
				<section className="section-content">
					<button className="btn btn-success"
					onClick={() => this.props.history.push("/locations/new")}>
						Add Location
					</button>
				</section>
				<div className="container-cards">
					{this.state.locations.map((location) => 
						<LocationCard
							key={location.id}
							location={location}
							deleteLocation={this.deleteLocation}
						/>
					)}
				</div>
			</>
		);
	}
}

export default LocationList;
