import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'

import './LocationForm.css'

class LocationForm extends Component {
    state = {
        locationName: "",
        loadingStatus: false,
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    constructNewLocation = event => {
        event.preventDefault()
        if (this.state.locationName === ""){
            window.alert("Please input the new location information.")
        } else {
            this.setState({ loadStatus: true})
            const location = {
                name: this.state.locationName,
            };

            ApiManager.post(location, "locations")
            .then(() => {this.props.history.push("/locations")})
        }
    }

    render(){
        return(
            <>
                <form onSubmit={this.constructNewLocation}>
                    <fieldset>
                        <div className="formgrid">
                            <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="locationName"
                            placeholder="Enter name here"
                            />
                            <label htmlFor="locationName">Location:</label>
                        </div>
                        <div className="aligRight">
                            <button type="submit"
                            disabled={this.state.loadingStatus}
                            >Save
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm;