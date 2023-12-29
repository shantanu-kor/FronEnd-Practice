import React from "react";

const CredientialsContext = React.createContext({
    idToken: null,
    removeIdToken: () => {},
    addIdToken: () => {},
})

export default CredientialsContext;