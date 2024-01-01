import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logout from "../components/Logout";

const HomePage = () => {
  return (
    <Container>
      <div className="position-absolute top-0 end-0">
        <Logout />
      </div>
      <Row>
        <Col>
          <h1 className="border-bottom">Welcome to Expense Tracker!!!</h1>
        </Col>
        <Col className="border">
          <h3 className="border-bottom">
            Your profile is Incomplete. <Link to="/profile">Complete Now</Link>
          </h3>
        </Col>
        <h3>
          <Link to="/verifyEmail">Verify Email</Link>
        </h3>
      </Row>
    </Container>
  );
};

export default HomePage;
