import React from 'react';
import { submitGroup } from '../services/firebase';

export default function SubmitGroup() {
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
        submitGroup(formData);
        setFormData(initInputs)

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Group Submission Form</h3>
            <label htmlFor='name'>Group Name: </label>
            <input 
                type="text"
                placeholder="Group Name"
                value={formData.name}
                onChange={handleChange}
                name="name"
                // required
                minLength={1}
            />
            <button type='submit'>Submit Group</button>
        </form>
    )
}