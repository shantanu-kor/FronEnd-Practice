import React from "react";

const AuthContext = React.createContext({
  idToken: null,
  addIdToken: (token) => {},
  removeIdToken: () => {},
});

export default AuthContext;
