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
		ApiManager.getAll('employees').then((employees) => {
			this.setState({
				employees: employees
			});
		});
	}

	deleteEmployee = (id) => {
		ApiManager.delete(id, 'employees').then(() => {
			ApiManager.getAll('employees').then((newEmployees) => {
				this.setState({
					employees: newEmployees
				});
			});
		});
	};

	render() {
		console.log('EMPLOYEE LIST: Render');

		return (
			<>
				<section className="section-content">
					<button type="button"
					className="btn btn-success"
					onClick={() => {this.props.history.push("/employees/new")}}>
						Add Employee
					</button>
				</section>
				<div className="container-cards">
					{this.state.employees.map((employee) => 
						<EmployeeCard 
							key={employee.id} 
							employee={employee}
							deleteEmployee={this.deleteEmployee}
						/>
					)}
				</div>
			</>
		);
	}
}

export default EmployeeList;
