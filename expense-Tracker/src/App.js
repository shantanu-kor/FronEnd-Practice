import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AuthenticationPage from "./pages/Authentication";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import VerifyEmailPage from "./pages/VerifyEmail";

import AuthContext from "./store/authContext";
import "./App.css";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" exact>
        {authCtx.idToken && <HomePage />}
        {!authCtx.idToken && <AuthenticationPage />}
      </Route>
      <Route path="/profile" exact>
        {authCtx.idToken && <ProfilePage />}
        {!authCtx.idToken && <Redirect to="/" />}
      </Route>
      <Route path="/verifyEmail">
        {authCtx.idToken && <VerifyEmailPage />}
        {!authCtx.idToken && <Redirect to="/" />}
      </Route>
    </Switch>
  );
}

export default App;
