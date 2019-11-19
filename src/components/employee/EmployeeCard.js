import React, { Component } from 'react';
import "./Employee.css"

class EmployeeCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						Employee Name: <span className="card-employeename">{this.props.employee.name}</span>
					</h3>
				</div>
			</div>
		);
	}
}

export default EmployeeCard;
