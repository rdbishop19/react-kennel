import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import AnimalCard from '../animal/AnimalCard'

class EmployeeWithAnimals extends Component {
    state = {
        employee: {},
        location: "",
        animals: []
    }

    componentDidMount(){
        //got here now make call to get employee with animal
        ApiManager.get(this.props.match.params.employeeId, "employees", "?_embed=animals&_expand=location")
            .then((result) => {
                this.setState({
                    employee: result,
                    location: result.location.name,
                    animals: result.animals,
                })
            })
    }

    render(){
        return(
            <div className="card">
                <p>Employee: {this.state.employee.name}</p>
                <p>Location: {this.state.location}</p>
                {this.state.animals.map(animal =>
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                        {...this.props}
                    />
                )}
            </div>
        )
    }
}

export default EmployeeWithAnimals
