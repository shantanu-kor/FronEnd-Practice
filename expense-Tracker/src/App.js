import React from "react";

import { Route } from "react-router-dom";
import AuthenticationPage from "./pages/Authentication";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Route to="/">
        <AuthenticationPage />
      </Route>
    </React.Fragment>
  );
}

export default App;
