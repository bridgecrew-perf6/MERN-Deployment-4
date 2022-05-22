import React from 'react'
import { useHistory } from "react-router-dom";
    
export default props => {
    
    const history = useHistory();
    const { petId } = props;
    
    const details = e => {
        history.push('/pets/' + petId);
    }
    
    return (
        <button className="btn btn-light border-dark" onClick={details}>
            📒 Details
        </button>
    )
}