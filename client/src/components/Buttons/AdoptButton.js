import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { petId, petName, successCallback } = props;
    
    const deletePet = e => {
        axios.delete('http://localhost:8000/api/pets/' + petId)
            .then(res=>{
                successCallback();
                
            })
    }
    
    return (
        <button className="btn btn-danger btn-sm m-1" onClick={deletePet}>
            🏠 Adopt {petName}
        </button>
    )
}

