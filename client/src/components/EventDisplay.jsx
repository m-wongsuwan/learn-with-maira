import React from 'react';
import { useGroups } from '../hooks/useGroups';

//copied from groupdisplay not yet modified

export default function EventDisplay() {
    const groups = useGroups()

    return (
        <>
            <h3>Select which group's records you'd like to work on</h3>
            {groups.map((group, index) => <h4 key={index}>{group.name}</h4>)}
        </>
    )

}