import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditButton from './Buttons/EditButton';
import DetailsButton from './Buttons/DetailsButton';

    
const PetList = (props) => {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data));
    }, [ ]);
    
    return (
        <div  id="homepage">
            {pets.length > 0 ?
            <>
            <h3 className="align-left">These pets are looking for a good home</h3>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {pets.sort((a, b) => a.type.localeCompare(b.type)).map(pet => (
                    <tr key={pet._id}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>
                        <EditButton petId={pet._id} />
                        <DetailsButton petId={pet._id} />
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            </>
            : <p className="alert alert-danger" >We have no quotes.</p>}
        </div>
    )
}
    
export default PetList;

