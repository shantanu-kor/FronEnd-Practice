import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { expenseActions } from "../store/expense";

import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";

const ExpensesList = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.expense.expenses);
  const getData = useCallback(async () => {
    dispatch(expenseActions.renewExpense());
    const res = await fetch(
      "https://expense-tracker-161e4-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json"
    );
    const data = await res.json();
    if (data !== null) {
      for (let i of Object.values(data)) {
        dispatch(expenseActions.addExpense(i));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  const deleteExpense = async (key) => {
    const res = await fetch(
      "https://expense-tracker-161e4-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json"
    );
    const data = await res.json();
    for (let [i, j] of Object.entries(data)) {
      if (j.key === key) {
        await fetch(
          `https://expense-tracker-161e4-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${i}.json`,
          {
            method: "DELETE",
          }
        );
        break;
      }
    }
    getData();
  };

  const deleteHandler = (key) => {
    deleteExpense(key);
  };

  const editHandler = (item) => {
    deleteExpense(item.key);
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
        {items.map((item) => (
          <ListGroup.Item key={item.key} className="text-center">
            <Container>
              <Row>
                <Col>{item.amount}</Col>
                <Col>{item.description}</Col>
                <Col>{item.category}</Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={deleteHandler.bind(null, item.key)}
                  >
                    Delete
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="warning"
                    onClick={editHandler.bind(null, item)}
                  >
                    Edit
                  </Button>
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
