import React, { useState } from "react";

import AuthContext from "./authContext";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);

  const addTokenHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const removeTokenHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const authContext = {
    idToken: token,
    addIdToken: addTokenHandler,
    removeIdToken: removeTokenHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
