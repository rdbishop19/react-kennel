import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'

import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        loadingStatus: false,
    };

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = event => {
        event.preventDefault()
        if (this.state.employeeName === ""){
            window.alert("Please input an employee name")
        } else {
            this.setState({ loadingStatus: true })
            const employee = {
                name: this.state.employeeName,
            };

            ApiManager.post(employee, "employees")
            .then(() => this.props.history.push("/employees"));
        }
    }


    render() {
        return(
            <>
                <form onSubmit={this.constructNewEmployee}>
                    <fieldset>
                        <div className="formgrid">
                            <input 
                            required
                            type="text"
                            onChange={this.handleFieldChange}
                            id="employeeName"
                            placeholder="Employee name"
                            />
                            <label htmlFor="employeeName">Name:</label>
                        </div>
                        <div className="alignRight">
                            <button type="submit"
                            disabled={this.state.loadingStatus}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EmployeeForm;