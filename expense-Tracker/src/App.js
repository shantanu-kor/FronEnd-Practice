import React, { useContext } from "react";

import { Route } from "react-router-dom";
import AuthenticationPage from "./pages/Authentication";
import HomePage from "./pages/Home";

import AuthContext from "./store/authContext";
import "./App.css";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Route to="/">
        {authCtx.idToken !== null  ? <HomePage /> : <AuthenticationPage />}
      </Route>
    </React.Fragment>
  );
}

export default App;
