import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './AnimalDetail.css';

class AnimalDetail extends Component {
	state = {
		name: '',
		breed: '',
		employee: '',
		loadingStatus: true
	};

	componentDidMount() {
		console.log('AnimalDetail: ComponentDidMount');
		//get(id) from ApiManager and hang on to the data; save into state
		const employeeInfo = "?_expand=employee"
		ApiManager.get(this.props.animalId, 'animals', employeeInfo).then((animal) => {
			this.setState({
				name: animal.name,
				breed: animal.breed,
				employee: animal.employee ? animal.employee.name : "none assigned",
				loadingStatus: false,
			});
		});
	}

	handleDelete = () => {
		//invoke the delete function in AnimalManager and re-direct to the animalList
		this.setState({ loadingStatus: true });
		ApiManager.delete(this.props.animalId, 'animals').then(() => this.props.history.push('/animals'));
	};

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
					<p>Employee: {this.state.employee}</p>
					<button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>
						Discharge
					</button>
				</div>
			</div>
		);
	}
}

export default AnimalDetail;
