import React, { Component } from 'react';
import './Owner.css';

class OwnerCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						Owner: <span className="card-ownername">{this.props.owner.name}</span>
					</h3>
				</div>
			</div>
		);
	}
}

export default OwnerCard;
