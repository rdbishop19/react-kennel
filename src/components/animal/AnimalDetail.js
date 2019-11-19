import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './AnimalDetail.css';

class AnimalDetail extends Component {
	state = {
		name: '',
		breed: ''
	};

	componentDidMount() {
		console.log('AnimalDetail: ComponentDidMount');
		//get(id) from ApiManager and hang on to the data; save into state
		ApiManager.get(this.props.animalId, "animals").then((animal) => {
			this.setState({
				name: animal.name,
				breed: animal.breed
			});
		});
	}

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<picture>
						<img src={require('./dog.svg')} alt="My Dog" />
					</picture>
					<h3>
						Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span>
					</h3>
					<p>Breed: {this.state.breed}</p>
				</div>
			</div>
		);
	}
}

export default AnimalDetail;
