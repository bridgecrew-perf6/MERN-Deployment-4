import React from 'react'
import { useHistory } from "react-router-dom";
    
export default props => {
    
    const history = useHistory();
    const { petId } = props;
    
    const updatePet = e => {
        history.push('/' + petId + '/edit');
    }
    
    return (
        <button className="btn btn-light m-1 border-dark" onClick={updatePet}>
            ✎ Edit Pet
        </button>
    )
}

