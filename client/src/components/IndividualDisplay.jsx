import React from 'react';
import { useIndividuals } from '../hooks/useIndividuals';

export default function IndividualDisplay() {
    const individuals = useIndividuals()

    return (
        <>
            <h3>Individuals in the system</h3>
            {individuals.map((person, index) => <h4 key={index}>{person.name}</h4>)}
        </>
    )

}