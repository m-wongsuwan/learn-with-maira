import React from "react";
import { getGroups } from "../services/firebase";

function useGroups() {
    const [groups, setGroups] = React.useState([])

    React.useEffect(() => {
        const unsubscribe = getGroups(setGroups);
        return unsubscribe
    }, []);

    return groups

}

export { useGroups }