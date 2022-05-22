import React from 'react'
import HomeButton from '../components/Buttons/HomeButton';
    
export default () => {
    
    return (
        <>
            <div className="d-flex justify-content-between">
                <h1>Pet Shelter</h1>
                <div>
                    <HomeButton/>
                </div>
            </div>
            <hr/>
        </>
    );
}

