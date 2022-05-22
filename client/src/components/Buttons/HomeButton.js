import React from 'react'
import { useHistory } from "react-router-dom";
    
export default props => {
    
    const history = useHistory();
    
    const sendHome = e => {
        history.push('/');
    }
    
    return (
        <button className="btn btn-dark m-1" onClick={sendHome}>
            Home
        </button>
    )
}

