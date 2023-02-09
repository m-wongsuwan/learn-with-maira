import React from 'react';
import { useGroups } from '../hooks/useGroups';
import { FocusGroupContext } from '../context/focusGroup';
import { getOneGroup } from '../services/firebase';

export default function GroupDisplay() {
    const { focusGroup, setFocusGroup } = React.useContext(FocusGroupContext)

    const groups = useGroups()
    // console.log(focusGroup)

    if (focusGroup) {
        getOneGroup(focusGroup.id)
    }

    

    return (
        <>
            <h3>Select which group's records you'd like to work on</h3>
            {groups.map((group, index) => <button key={index} onClick={() => setFocusGroup(group)}>{group.name}</button>)}
        </>
    )

}