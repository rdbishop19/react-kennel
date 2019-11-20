import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'

import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        ownerName: "",
        loadingStatus: false,
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createNewOwner = evt => {
        evt.preventDefault()
        if (this.ownerName === ""){
            window.alert("Please enter the owner's information.")
        } else {
            this.setState({ loadingStatus: true })
            const owner = {
                name: this.state.ownerName,
            }

            ApiManager.post(owner, "owners")
            .then(() => this.props.history.push("/owners"));
        }
    }

    render(){
        return(
            <>
                <form onSubmit={this.createNewOwner}>
                    <fieldset>
                        <div className="formgrid">
                            <input 
                            type="text"
                            required
                            placeholder="Enter here"
                            id="ownerName"
                            onChange={this.handleFieldChange}
                            />
                            <label htmlFor="ownerName">Name:</label>
                        </div>
                        <div className="alignRight">
                            <button
                            type="submit"
                            >Save</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm;