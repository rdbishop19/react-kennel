import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import './EmployeeEditForm.css'

class EmployeeEditForm extends Component {
    state = {
        employeeName: '',
        loadingStatus: true
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true})
        const editedEmployee = {
            id: this.props.match.params.employeeId,
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
                loadingStatus: false,
            });
        });
    }

    render() {
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