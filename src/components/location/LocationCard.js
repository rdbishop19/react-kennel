import React, { Component } from 'react'

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
				<div className="card-content">
					<h3>
						Location Name: <span className="card-locationname">Gallatin, TN</span>
					</h3>
				</div>
			</div>
        )
    }
}

export default LocationCard