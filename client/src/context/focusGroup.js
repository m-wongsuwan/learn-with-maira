import React from "react";

const FocusGroupContext = React.createContext();

const FocusGroupProvider = (props) => {
    const [focusGroup, setFocusGroup] = React.useState(null)

    return (
        <FocusGroupContext.Provider value={{
            focusGroup,
            setFocusGroup
        }} 
        >
            {props.children}
        </FocusGroupContext.Provider>
    )
}

export {FocusGroupContext, FocusGroupProvider}