import React, { useContext } from "react";
import "./App.css";
import AuthPage from "./pages/Authentication";
import AuthContext from "./store/auth-context";
import HomePage from "./pages/Home";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      {authCtx.idToken ? <HomePage /> : <AuthPage />}
    </React.Fragment>
  );
}

export default App;
