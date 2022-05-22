import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
import AdoptButton from '../components/Buttons/AdoptButton';
import EditButton from '../components/Buttons/EditButton';
import HomeButton from '../components/Buttons/HomeButton';
import LikeButton from '../components/Buttons/LikeButton';
    
const Detail = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' +id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <div className="d-flex justify-content-between m-4">
                <h1>Details about: {pet.name}</h1>
            <AdoptButton petId={pet._id} petName={pet.name} successCallback={()=>history.push('/')}/>
            </div>
            <div className="">
                <table className="table customTable">
                    <tbody>
                        <tr>
                            <th>Name</th>
                                <td>{pet.name}</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                                <td>{pet.type}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                                <td>{pet.description}</td>
                        </tr>
                        <tr>
                            <th>Skills</th>
                            <td>
                                <ul className="list-group">
                                    <li className="list-group-item border-0">{pet.skill1}</li>
                                    <li className="list-group-item border-0">{pet.skill2}</li>
                                    <li className="list-group-item border-0">{pet.skill3}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <LikeButton/>
            </div>
        </div>
    )
}
    
export default Detail;

