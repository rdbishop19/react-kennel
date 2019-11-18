import React, { Component } from 'react';
import OwnerCard from '../owner/OwnerCard';
import LocationCard from '../location/LocationCard';

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">Doodles</span></h3>
          <p>Breed: Poodle</p>
          <OwnerCard />
          <LocationCard />
        </div>
      </div>
    );
  }
}

export default AnimalCard;