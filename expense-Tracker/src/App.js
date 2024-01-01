import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import AuthenticationPage from "./pages/Authentication";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";

import AuthContext from "./store/authContext";
import "./App.css";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route to="/profile" exact>
        <ProfilePage />
      </Route>
      <Route to="/" exact>
        {authCtx.idToken && <HomePage />}
        {!authCtx.idToken && <AuthenticationPage />}
      </Route>
    </Switch>
  );
}

export default App;
