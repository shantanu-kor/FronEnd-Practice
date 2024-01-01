import React from "react";

const AuthContext = React.createContext({
    idToken: null,
    setIdToken: () => {},
});

export default AuthContext;