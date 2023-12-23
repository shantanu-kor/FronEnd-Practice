import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./OrderMenu.module.css";
import CartContext from "../store/cartContext";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const protalElement = document.getElementById("overlay");

const Orders = () => {
  const cartCtx = useContext(CartContext);
  let totalPrice = 0;
  cartCtx.shoeList.forEach((item) => (totalPrice += item.totalPrice));
  return (
    <React.Fragment>
      <ul>
        {cartCtx.shoeList.map((item) => (
          <li>
            {item.name} L: {item.large} M: {item.medium} S: {item.small} Price:{" "}
            {item.totalPrice}
          </li>
        ))}
      </ul>
      <h3>Total Price: {totalPrice}</h3>
    </React.Fragment>
  );
};

const OrderMenu = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        protalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <h1>Orders</h1>
          <Orders />
          <button onClick={props.onClick}>Hide Orders</button>
        </ModalOverlay>,
        protalElement
      )}
    </React.Fragment>
  );
};

export default OrderMenu;
