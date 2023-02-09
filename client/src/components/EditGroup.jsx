import React from "react";
import { FocusGroupContext } from "../context/focusGroup";
import { useIndividuals } from '../hooks/useIndividuals';
import { addIndividualToGroup, addFounderToGroup, removeMemberFromGroup, getGroupMembers } from "../services/firebase";


export default function EditGroup() {
    const { focusGroup } = React.useContext(FocusGroupContext)
    const individuals = useIndividuals()
    const [groupMembers, setGroupMembers] = React.useState([])

    // tinkering
    React.useEffect(() => {
        console.log('runs')
        getGroupMembers(focusGroup.id, setGroupMembers)
    }, [focusGroup])

    // console.log(groupMembers)

    // console.log(focusGroup.id)    

    // function useGroupMembers() {
        
    //     React.useEffect(() => {
    //         console.log('the code in here is running')
    //         const unsubscribe = getGroupMembers(focusGroup.id, setGroupMembers)
    //         return unsubscribe
    //     }, [focusGroup])

    //     return groupMembers
    // }
    // console.log(useGroupMembers())
    
    

    //not production ready, just proof of concept front+backend functionality
    const addPeopleList = individuals.map((individual, index) => {
        return (
            <button
                onClick={()=> addIndividualToGroup(focusGroup.id, individual)}
                key={`addPerson${index}`}
            >
                {individual.name}
            </button>
        )
    })
    const addFounderList = individuals.map((individual, index) => {
        return (
            <button
                onClick={()=> addFounderToGroup(focusGroup.id, individual)}
                key={`addFounder${index}`}
            >
                {individual.name}
            </button>
        )
    })
    // need to GET the members of a group here
    //const removeMemberList = 

    return (
        <>
            <h1>edit group component</h1>
            {focusGroup ? 
                <>
                    <div className="addPeople">
                        <h3>Add...</h3>
                        {addPeopleList}
                        <h3>... to {focusGroup.name} as a member?</h3>
                        <h3>Add...</h3>
                        {addFounderList}
                        <h3>... to {focusGroup.name} as a founder?</h3>
                    </div>

                    <div className="removePeople">

                    </div>
                </>
            : 
                null
            }

            <h1>end edit group component</h1>
        </>
    )

}