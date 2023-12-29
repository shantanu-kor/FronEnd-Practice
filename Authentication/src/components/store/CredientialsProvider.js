import React, { useState } from "react";

import CredientialsContext from "./credientialsContext";

const CredientialsProvider = (props) => {
    const [token, setToken] = useState(null)
    
    const removeIdTokenHandler = () => {
        setToken(null);
    };

    const addIdTokenHandler = (id) => {
        setToken(id);
    };
    
    const credientials = {
        idToken: token,
        removeIdToken: removeIdTokenHandler,
        addIdToken: addIdTokenHandler,
    }
    
    return <CredientialsContext.Provider value={credientials}>{props.children}</CredientialsContext.Provider>
}

export default CredientialsProvider;