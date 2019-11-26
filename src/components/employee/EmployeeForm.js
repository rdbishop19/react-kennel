import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'

import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        loadingStatus: false,
        locations: [],
        locationId: "",
    };

    componentDidMount(){
        ApiManager.getAll("locations")
        .then(locations => {
            this.setState({
                locations: locations,
            })
        })
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = event => {
        event.preventDefault()
        if (this.state.employeeName === "" || this.state.locationId === ""){
            window.alert("Please input an employee name and location")
        } else {
            this.setState({ loadingStatus: true })
            const employee = {
                name: this.state.employeeName,
                locationId: this.state.locationId,
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
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="employeeName"
                            placeholder="Employee name"
                            />
                            <label htmlFor="employeeName">Name:</label>
                        </div>
                        <div className="formgrid">
                            <label htmlFor="locationId">Location:</label>
                            <select
                                className="form-control"
                                id="locationId"
                                value={this.state.locationId}
                                onChange={this.handleFieldChange}
                            > 
                                <option key={0} value=""></option>
                                {this.state.locations.map(location =>
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                                )}
                            </select>
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