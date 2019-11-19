import React, { Component } from 'react';
import AnimalCard from './AnimalCard';
import ApiManager from '../../modules/ApiManager';

class AnimalList extends Component {
	state = {
		animals: []
	};

	componentDidMount() {
		ApiManager.getAll("animals").then((animals) => {
			this.setState({
				animals: animals
			});
		});
	}

	deleteAnimal = id => {
		ApiManager.delete(id, "animals")
		.then(() => {
		  ApiManager.getAll("animals")
		  .then((newAnimals) => {
			this.setState({
				animals: newAnimals
			})
		  })
		})
	  }

	render() {
		return (
			<>
				<section className="section-content">
					<button type="button"
						className="btn"
						onClick={() => {this.props.history.push("/animals/new")}}>
							Admit Animal
						</button>
				</section>
				<div className="container-cards">
					{this.state.animals.map((animal) => 
						<AnimalCard 
							key={animal.id}
							animal={animal}
							deleteAnimal={this.deleteAnimal}
						/>
					)}
				</div>
			</>
		)
	}
}

export default AnimalList;
