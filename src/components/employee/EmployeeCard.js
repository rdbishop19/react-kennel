import React, { Component } from 'react';

class EmployeeCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						Employee Name: <span className="card-employeename">Mickey</span>
					</h3>
					<p>Position: Trainer</p>
				</div>
			</div>
		);
	}
}

export default EmployeeCard;
