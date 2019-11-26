import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import './AnimalForm.css'

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        loadingStatus: false,
        employees: [],
        employeeId: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };

    componentDidMount(){
        ApiManager.getAll("employees")
        .then((employees) => {
            this.setState({ employees: employees })
        })
    }
    /* Local method for validation, set loadingStatus, crate animal */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === ""){
            window.alert("Please input an animal name and breed")
        } else {
            this.setState({ loadingStatus: true });
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                employeeId: this.state.employeeId ? Number(this.state.employeeId) : "",
            };

            // Create the animal and redirect the user to animal list
            ApiManager.post(animal, "animals")
            .then(() => this.props.history.push("/animals"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="animalName"
                        placeholder="Animal name"
                        />
                        <label htmlFor="animalName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="breed"
                        placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="formgrid">
                        <label htmlFor="employeeId">Employee:</label>
                        <select id="employeeId" onChange={this.handleFieldChange}>
                            <option key={0} value=""></option>
                            {this.state.employees.map(employee =>
                            <option key={employee.id} value={employee.id}>{employee.name}</option>
                            )}
                    </select>

                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default AnimalForm;