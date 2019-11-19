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

	deleteOwner = id => {
		ApiManager.delete(id, "owners")
		.then(() => {
			ApiManager.getAll("owners")
			.then((newOwners) => {
				this.setState({
					owners: newOwners
				})
			})
		})
	}

	render() {
		return (
			<div className="container-cards">
				{this.state.owners.map((owner) => 
					<OwnerCard
						key={owner.id}
						owner={owner}
						deleteOwner={this.deleteOwner}
					/>
				)}
			</div>
		)
	}
}

export default OwnerList;