import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="border-bottom">Welcome to Expense Tracker!!!</h1>
        </Col>
        <Col className="border">
        <h3 className="border-bottom">Your profile is Incomplete. <Link to="/profile">Complete Now</Link></h3>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
