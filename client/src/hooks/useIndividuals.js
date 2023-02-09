import React from "react";
import { getIndividuals } from "../services/firebase";

function useIndividuals() {
    const [individuals, setIndividuals] = React.useState([])

    React.useEffect(() => {
        const unsubscribe = getIndividuals(setIndividuals);
        return unsubscribe
    }, []);

    return individuals

}

export { useIndividuals }