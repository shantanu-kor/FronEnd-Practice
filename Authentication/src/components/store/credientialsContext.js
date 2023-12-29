import React from "react";

const CredientialsContext = React.createContext({
    idToken: null,
    isLoggedIn: false,
    removeIdToken: () => {},
    addIdToken: () => {},
})

export default CredientialsContext;