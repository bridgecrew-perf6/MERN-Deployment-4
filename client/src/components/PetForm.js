import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import CancelButton from './Buttons/CancelButton';


const Create = (props) => {
    const [form , setForm] = useState({
        name: '',
        type: '',
        description: '',
        skill1: '',
        skill2: '',
        skill3: '',
        likes: 0
    })

    const [errors, setErrors] = useState({})

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', form)
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div className="container formContainer">
            <h1>Know a pet needing a home?</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="d-flex flex-row justify-content-between">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={onChangeHandler} />
                            {errors.name && <div className="alert-sm alert-danger">{errors.name.properties.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <input type="text" className="form-control" id="type" name="type" value={form.type} onChange={onChangeHandler} />
                            {errors.type && <div className="alert-sm alert-danger">{errors.type.properties.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" id="description" name="description" value={form.description} onChange={onChangeHandler} />
                            {errors.description && <div className="alert-sm alert-danger">{errors.description.properties.message}</div>}
                        </div>
                    </div>
                    <div  className="form">
                        <div className="form-group">
                            <label htmlFor="skill1">Skill 1</label>
                            <input type="text" className="form-control" id="skill1" name="skill1" value={form.skill1} onChange={onChangeHandler} />
                            {errors.skill1 && <div className="alert-sm alert-danger">{errors.skill1.properties.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="skill2">Skill 2</label>
                            <input type="text" className="form-control" id="skill2" name="skill2" value={form.skill2} onChange={onChangeHandler} />
                            {errors.skill2 && <div className="alert-sm alert-danger">{errors.skill2.properties.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="skill3">Skill 3</label>
                            <input type="text" className="form-control" id="skill3" name="skill3" value={form.skill3} onChange={onChangeHandler} />
                            {errors.skill3 && <div className="alert-sm alert-danger">{errors.skill3.properties.message}</div>}
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary"> 💾 Add Pet</button>
                <Link to="/"><CancelButton /></Link>
            </form>
        </div>
    )
}


export default Create;