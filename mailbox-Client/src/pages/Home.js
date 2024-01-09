import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ComposeEmail from "../components/ComposeMail";
import NavBar from "../components/Navigation";

const HomePage = () => {
  const [composeMailStatus, setComposeMailStatus] = useState(false);
  const composeMailHandler = () => {
    setComposeMailStatus(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <h1>Welcome to your Mail Box!</h1>
      <Button variant="dark" onClick={composeMailHandler}>Compose Mail</Button>
      <NavBar composeMailStatus={composeMailStatus} setComposeMailStatus={setComposeMailStatus}/>
      {composeMailStatus && <ComposeEmail />}
    </React.Fragment>
  );
};

export default HomePage;
