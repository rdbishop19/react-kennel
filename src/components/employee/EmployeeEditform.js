import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import './EmployeeEditForm.css'

class EmployeeEditForm extends Component {
    state = {
        employeeName: '',
        locationId: "",
        locations: [],
        loadingStatus: true,
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        if (this.state.locationId === ""){
            window.alert("Please choose a location")
            return
        }
        this.setState({ loadingStatus: true})
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            locationId: Number(this.state.locationId),
            name: this.state.employeeName
        };

        ApiManager.update(editedEmployee, "employees")
        .then(() => this.props.history.push("/employees"))
    }

    componentDidMount(){
        ApiManager.get(this.props.match.params.employeeId, "employees")
        .then(employee => {
            this.setState({
                employeeName: employee.name,
                locationId: employee.locationId,
                loadingStatus: false,
            });
        });

        ApiManager.getAll("locations")
        .then(locations => {
            this.setState({
                locations: locations,
            });
        });
    }

    render() {
        console.log('locations', this.state.locations)
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text"
                            id="employeeName"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            value={this.state.employeeName}
                        />
                        <label htmlFor="employeeName">Employee name</label>
                    </div>
                    <div className="formgrid">
                        <label htmlFor="locationId">Location name:</label>
                        <select
                            className="form-control"
                            id="locationId"
                            required
                            value={this.state.locationId}
                            onChange={this.handleFieldChange}
                        > 
                            {/* <option key={0} value=""></option> */}
                            {this.state.locations.map(location =>
                            <option key={location.id} value={location.id}>
                                {location.name}
                            </option>
                            )}
                        </select>
                    </div>                    
                    <div className="alignRight">
                        <button className="btn btn-primary"
                            type="button"
                            disabled={this.state.loadingStatus}
                            onClick={this.updateExistingEmployee}
                        >Save</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }

}

export default EmployeeEditForm