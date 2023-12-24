import React, { useContext } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import CartContext from "../store/cartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const productList = cartCtx.productList;

  const removeHandler = (key) => {
    cartCtx.removeProduct(key);
  };

  return (
    <Modal show={props.show} onHide={props.onClick} animation={false}>
      <ListGroup>
        {productList.map((item) => (
          <ListGroup.Item>
            Name: {item.title} <br /> Price: {item.price} <br /> Quantity: {item.quantity} <br />
            <Button variant="danger" onClick={removeHandler.bind(null, item.key)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button onClick={props.onClick}>Hide Cart</Button>
    </Modal>
  );
};

export default Cart;
