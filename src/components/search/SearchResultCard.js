import React from 'react'

export function SearchResultCard(props){
    const { path } = props
    const { name, breed, id } = props.item

    const handleClick = () => {
        // console.log('props', props)
        props.history.push(`/${path}/${id}`)
    }
    return(
        <div className="card-container">
            <p>Name: {name}</p>
            {breed && <p>Breed: {breed}</p>}
            <button type="button" onClick={handleClick}>Details</button>
        </div>
    )
}