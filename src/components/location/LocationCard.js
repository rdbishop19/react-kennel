import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Location.css';

class LocationCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						Location: <span className="card-locationname">{this.props.kennelLocation.name}</span>
					</h3>
					<Link to={`/locations/${this.props.kennelLocation.id}`}>
						<button>Details</button>
					</Link>
					<button type="button" onClick={() => {
						this.props.history.push(`/locations/${this.props.kennelLocation.id}/edit`)
					}} >
						Edit
					</button>
					<button type="button" onClick={() => this.props.deleteLocation(this.props.kennelLocation.id)}>
						Remove
					</button>
				</div>
			</div>
		);
	}
}

export default LocationCard;
