import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './LocationDetail.css';

class LocationDetail extends Component {
	state = {
		location: '',
		loadingStatus: true
	};

	componentDidMount() {
		console.log('LocationDetail: componentDidMount');
		ApiManager.get(this.props.locationId, 'locations').then((location) => {
			this.setState({
				name: location.name,
				loadingStatus: false
			});
		});
	}

	handleDelete = () => {
		this.setState({ loadingStatus: true });
		ApiManager.delete(this.props.locationId, 'locations').then(() => this.props.history.push('/locations'));
	};

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						Location: <span className="card-locationname">{this.state.name}</span>
					</h3>
					<button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>
						Close Location
					</button>
				</div>
			</div>
		);
	}
}

export default LocationDetail;
