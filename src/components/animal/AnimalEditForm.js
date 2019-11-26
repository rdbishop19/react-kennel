import React, { Component } from "react"
import ApiManager from "../../modules/ApiManager"
import "./AnimalForm.css"

class AnimalEditForm extends Component {
    //set the initial state
    state = {
      animalName: "",
      breed: "",
      employeeId: "",
      loadingStatus: true,
      employees: []
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingAnimal = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedAnimal = {
        id: this.props.match.params.animalId,
        name: this.state.animalName,
        breed: this.state.breed,
        employeeId: Number(this.state.employeeId),
      };

      ApiManager.update(editedAnimal, "animals")
      .then(() => this.props.history.push("/animals"))
    }

    componentDidMount() {
      ApiManager.get(this.props.match.params.animalId, "animals")
      .then(animal => {
          this.setState({
            animalName: animal.name,
            breed: animal.breed,
            employeeId: animal.employeeId,
            loadingStatus: false,
          });
      });

      ApiManager.getAll("employees")
      .then(employees => this.setState({ employees: employees }))
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="animalName"
                value={this.state.animalName}
              />
              <label htmlFor="animalName">Animal name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              />
              <label htmlFor="breed">Breed</label>
            </div>

            <div className="formgrid">
              <label htmlFor="employeeId">Employee name:</label>
              <select
                className="form-control"
                id="employeeId"
                value={this.state.employeeId}
                onChange={this.handleFieldChange}
              > 
                <option key={0} value=""></option>
                {this.state.employees.map(employee =>
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                )}
              </select>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default AnimalEditForm