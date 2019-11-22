import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'

class LocationEditForm extends Component {
    state = {
        locationName: '',
        loadingStatus: true
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount(){
        ApiManager.get(this.props.match.params.locationId, "locations")
        .then((location) => {
            this.setState({
                locationName: location.name,
                loadingStatus: false,
            })
        })
    }

    updateExistingLocation = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true })
        const updatedLocation = {
            id: this.props.match.params.locationId,
            name: this.state.locationName
        }
        ApiManager.update(updatedLocation, "locations")
        .then(() => this.props.history.push("/locations"))
    }

    render(){
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text"
                        id="locationName"
                        onChange={this.handleFieldChange}
                        value={this.state.locationName}
                        required
                        />
                        <label htmlFor="locationName">Location Name:</label>
                    </div>
                    <div className="alignRight">
                        <button type="button"
                        className="btn btn-primary"
                        disabled={this.state.loadingStatus}
                        onClick={this.updateExistingLocation}
                        >Save</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default LocationEditForm