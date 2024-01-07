import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ComposeEmail from "../components/ComposeMail";

const HomePage = () => {
  const [composeMailStatus, setComposeMailStatus] = useState(false);
  const composeMailHandler = () => {
    setComposeMailStatus(true);
  };

  return (
    <React.Fragment>
      <h1>Welcome to your Mail Box!</h1>
      <Button variant="dark" onClick={composeMailHandler}>Compose Mail</Button>
      {composeMailStatus && <ComposeEmail />}
    </React.Fragment>
  );
};

export default HomePage;
