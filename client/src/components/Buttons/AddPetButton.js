import React from 'react'
import { useHistory } from "react-router-dom";
    
export default props => {
    
    const history = useHistory();    
    const addPetToShelter = e => {
        history.push('/pets/new');
    }
    
    return (
        <button className="btn btn-primary m-1" onClick={addPetToShelter}>
            Add a pet to the shelter
        </button>
    )
}

