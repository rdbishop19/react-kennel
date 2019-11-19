import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './LocationDetail.css';

class LocationDetail extends Component {
	state = {
        location: ""
    };

	componentDidMount() {
		console.log('LocationDetail: componentDidMount');
		ApiManager.get(this.props.locationId, "locations").then((location) => {
            this.setState({
                name: location.name
            })
        });
	}

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						Location: <span className="card-locationname">{this.state.name}</span>
					</h3>
				</div>
			</div>
		);
	}
}

export default LocationDetail;
