import React, { useContext } from "react";
import ExpenseContext from "../store/expenseContext";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";

const ExpensesList = (props) => {
  const expenseCtx = useContext(ExpenseContext);

  const deleteHandler = (key) => {
    expenseCtx.deleteExpense(key);
  };

  const editHandler = (item) => {
    expenseCtx.deleteExpense(item.key);
    props.onChange(item);
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col style={{ textAlign: "center", fontWeight: "bold" }}>Amount</Col>
          <Col style={{ textAlign: "center", fontWeight: "bold" }}>
            Description
          </Col>
          <Col style={{ textAlign: "center", fontWeight: "bold" }}>
            Category
          </Col>
          <Col style={{ textAlign: "center", fontWeight: "bold" }}>Delete</Col>
          <Col style={{ textAlign: "center", fontWeight: "bold" }}>Edit</Col>
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
                <Col>
                  <Button onClick={deleteHandler.bind(null, item.key)}>Delete</Button>
                </Col>
                <Col>
                  <Button onClick={editHandler.bind(null, item)}>Edit</Button>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default ExpensesList;
