import React, { Component } from 'react';
import OwnerCard from './OwnerCard';
import ApiManager from '../../modules/ApiManager';

class OwnerList extends Component {
	state = {
		owners: []
	};

	componentDidMount() {
		ApiManager.getAll('owners').then((owners) => {
			this.setState({
				owners: owners
			});
		});
	}

	render() {
		return (
			<div className="container-cards">
				{this.state.owners.map((owner) => <OwnerCard key={owner.id} owner={owner}/>)}
			</div>
		)
	}
}

export default OwnerList;
