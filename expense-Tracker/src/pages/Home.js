import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logout from "../components/Logout";
import ExpenseInput from "../components/ExpenseInput";
import ExpensesList from "../components/ExpensesList";

const HomePage = () => {
  return (
    <React.Fragment>
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
              Your profile is Incomplete.{" "}
              <Link to="/profile">Complete Now</Link>
            </h3>
          </Col>
          <Col>
            <h3>
              <Link to="/verifyEmail">Verify Email</Link>
            </h3>
          </Col>
        </Row>
      </Container>
      <h2 style={{textAlign: 'center'}}>New Expense</h2>
      <ExpenseInput />
      <h2 style={{textAlign: 'center'}}>Expenses</h2>
      <ExpensesList />
    </React.Fragment>
  );
};

export default HomePage;
