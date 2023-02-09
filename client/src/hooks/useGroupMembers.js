import React from "react";
import { getGroupMembers } from "../services/firebase";

function useIndividuals() {
    const [groupMembers, setGroupMembers] = React.useState([])

    React.useEffect(() => {
        const unsubscribe = getGroupMembers(setIndividuals);
        return unsubscribe
    }, []);

    return individuals

}

export { useIndividuals }