import React, { useContext } from "react";
import ExpenseContext from "../store/expenseContext";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

const ExpensesList = () => {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col style={{textAlign: 'center', fontWeight: 'bold'}}>Amount</Col>
          <Col style={{textAlign: 'center', fontWeight: 'bold'}}>Description</Col>
          <Col style={{textAlign: 'center', fontWeight: 'bold'}}>Category</Col>
        </Row>
      </Container>
      <ListGroup>
        {expenseCtx.expenseList.map((item) => (
          <ListGroup.Item key={item.key} className="text-center">
            <Container>
              <Row>
                <Col>{item.amount}</Col>
                <Col>{item.description}</Col>
                <Col>{item.category}</Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default ExpensesList;
