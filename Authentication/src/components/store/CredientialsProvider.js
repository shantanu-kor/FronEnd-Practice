import React, { useState } from "react";

import CredientialsContext from "./credientialsContext";

const CredientialsProvider = (props) => {
    const [logStatus, setLogStatus] = useState(false);
    
    const removeIdTokenHandler = () => {
        localStorage.removeItem("token");
        setLogStatus(false);
    };

    const addIdTokenHandler = (id) => {
        localStorage.setItem("token", id);
        setLogStatus(true);
    };
    
    const credientials = {
        idToken: localStorage.getItem("token"),
        isLoggedIn: logStatus,
        removeIdToken: removeIdTokenHandler,
        addIdToken: addIdTokenHandler,
    }
    
    return <CredientialsContext.Provider value={credientials}>{props.children}</CredientialsContext.Provider>
}

export default CredientialsProvider;