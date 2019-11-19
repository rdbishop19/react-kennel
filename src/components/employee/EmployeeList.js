import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
import ApiManager from '../../modules/ApiManager';

class EmployeeList extends Component {
	state = {
		employees: []
	};

	componentDidMount() {
		console.log('EMPLOYEE LIST: ComponentDidMount');
		//getAll from ApiManager and hang on to that data;
		ApiManager.getAll("employees").then((employees) => {
			this.setState({
				employees: employees
			});
		});
	}

	render() {
		console.log('EMPLOYEE LIST: Render');

		return (
			<div className="container-cards">
				{this.state.employees.map((employee) => <EmployeeCard key={employee.id} employee={employee}/>)}
			</div>
		)
	}
}

export default EmployeeList;