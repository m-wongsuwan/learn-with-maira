import React from 'react';
import { submitIndividual } from '../services/firebase';

export default function SubmitIndividual() {
    const initInputs = {
        name: ''
    }

    const [ formData, setFormData ] = React.useState(initInputs)

    const handleChange = (event) => {
        const { value, name } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitIndividual(formData);
        setFormData(initInputs)

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Individual Submission Form</h3>
            <label htmlFor='name'>Name: </label>
            <input 
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                name="name"
                // required
                minLength={1}
            />
            <button type='submit'>Submit Person</button>
        </form>
    )
}