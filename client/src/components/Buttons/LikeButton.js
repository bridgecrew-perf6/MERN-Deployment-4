import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
export default props => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' +id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, []);
    
    const like = () => {
        axios.put('http://localhost:8000/api/pets/' + id, {
            likes: pet.likes + 1
        })
        .then(res => {
            setPet(res.data);
            setLiked(true);
        })
        .catch(err => console.error(err));
    }
    
    return (
        <div className='d-flex justify-content-center'>
            <div className='m-3'>
                <button className="btn btn-success" onClick={like} disabled={liked}>👍 Like {pet.name}</button>
            </div>
            <div className='m-4'>
               <p>{pet.likes} Like(s)</p>
            </div>
        </div>
    )
}
