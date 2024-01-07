import React, { useContext, useEffect } from "react";
import "./App.css";
import AuthPage from "./pages/Authentication";
import AuthContext from "./store/auth-context";
import HomePage from "./pages/Home";
import { Button } from "react-bootstrap";

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("actualEmail")) {
      authCtx.addIdToken(localStorage.getItem("token"));
      authCtx.addEmail(localStorage.getItem("actualEmail"));
    }
  }, [authCtx])

  const logoutHandler = () => {
    authCtx.removeCred();
  }

  return (
    <React.Fragment>
      <div className="position-absolute top-0 end-0">
      {authCtx.idToken && <Button onClick={logoutHandler}>Logout</Button>}
      </div>
      {authCtx.idToken ? <HomePage /> : <AuthPage />}
    </React.Fragment>
  );
}

export default App;
