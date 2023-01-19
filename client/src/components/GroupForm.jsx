import { validateArgCount } from '@firebase/util';
import React from 'react';
import { submitGroup } from '../services/firebase';

export default function GroupForm() {
    const initInputs = {
        name: '',
        eventParticipation: '',
        founder: '',
        members: '',
        influences: ''
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
        console.log(formData)
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
            <br />
            <label htmlFor='founder' > Founder/s: </label>
            <input 
                type="text"
                placeholder="Founder"
                value={formData.founder}
                onChange={handleChange}
                name="founder"
                required
                minLength={1}
            />
            <span> + Add another? *placeholder*</span>
            <br />
            <label htmlFor='members'>Members (String not appropriate for individuals who should have pages/docs, should eventually be able to search for or create docs for individuals to relate to the group):</label>
            <input 
                type="text"
                placeholder="Members"
                value={formData.members}
                onChange={handleChange}
                name="members"
                required
                minLength={1}
            />
            <span> + Add another? *placeholder*</span>
            <br />
            <label htmlFor='members'>Influences (many of the same considerations as above):</label>
            <input 
                type="text"
                placeholder="Influences"
                value={formData.influences}
                onChange={handleChange}
                name="influences"
                required
                minLength={1}
            />
            <span> + Add another? *placeholder*</span>
            <br />
            <button type='submit'>Submit Group</button>
        </form>
    )
}