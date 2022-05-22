import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetList from '../components/PetList';
import HomeButton from '../components/Buttons/HomeButton';
import AddPetButton from '../components/Buttons/AddPetButton';
    
export default () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[ pets._id ]);
    
    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id !== petId));
    }
    
    return (
        <div>
            <div className="d-flex justify-content-end mb-5">
                <AddPetButton/>
            </div>
           {loaded && <PetList pets={pets} removeFromDom={removeFromDom}/>}
        </div>
    );
}

