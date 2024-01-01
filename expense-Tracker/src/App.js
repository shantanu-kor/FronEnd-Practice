import React, { useState } from "react";

import { Route } from "react-router-dom";
import AuthenticationPage from "./pages/Authentication";
import HomePage from "./pages/Home";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Route to="/">
        {localStorage.getItem("token") ? <HomePage /> : <AuthenticationPage />}
      </Route>
    </React.Fragment>
  );
}

export default App;
