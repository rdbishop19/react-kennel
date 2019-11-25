import React, { Component } from 'react'
import './OwnerEditForm.css'
import ApiManager from '../../modules/ApiManager'

class OwnerEditForm extends Component {
    state = {
        ownerName: '',
        loadingStatus: true,
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
        evt.preventDefault()
        const updatedOwner = {
            id: this.props.match.params.ownerId,
            name: this.state.ownerName,
        }
        ApiManager.update(updatedOwner, "owners")
        .then(() => {this.props.history.push("/owners")})
    }

    componentDidMount(){
        ApiManager.get(this.props.match.params.ownerId,"owners")
        .then((owner) => {
            this.setState({
                ownerName: owner.name,
                loadingStatus: false
            });
        });
    }

    render(){
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text"
                        className="form-control"
                        required
                        id="ownerName"
                        value={this.state.ownerName}
                        onChange={this.handleFieldChange}
                        />
                        <label htmlFor="ownerName">Owner Name:</label>
                    </div>
                    <div className="alignRight">
                        <button type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.updateExistingOwner}
                        className="btn btn-primary">SAVE</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default OwnerEditForm