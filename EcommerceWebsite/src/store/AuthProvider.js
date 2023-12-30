import React, { useState } from "react";

import AuthContext from "./authContext";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);

  const [email, setEmail] = useState(null);

  const addTokenHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const removeTokenHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");

  };

  const authContext = {
    idToken: localStorage.getItem("token"),
    email: localStorage.getItem("email"),
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
