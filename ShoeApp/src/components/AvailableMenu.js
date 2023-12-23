import React, { useContext } from "react";

import OrderContext from "../store/orderContext";
import CartContext from "../store/cartContext";

const AvailableMenu = (props) => {
  const orderCtx = useContext(OrderContext);

  const cartCtx = useContext(CartContext);

  let totalOrders = 0;
  cartCtx.shoeList.forEach((item) => totalOrders += item.large + item.medium + item.small);

  const addLargeToCartHandler = (key, name, price) => {
    orderCtx.orderItem(key, name, price, "large");
  };

  const addMediumToCartHandler = (key, name, price) => {
    orderCtx.orderItem(key, name, price, "medium");
  };

  const addSmallToCartHandler = (key, name, price) => {
    orderCtx.orderItem(key, name, price, "small");
  };

  return (
    <React.Fragment>
      <ul>
        {orderCtx.items.map((item) => (
          <li>
            {item.name} {item.description} {item.price}{" "}
            <button onClick={addLargeToCartHandler.bind(null, item.key, item.name, item.price)}>L {item.large}</button>{" "}
            <button onClick={addMediumToCartHandler.bind(null, item.key, item.name, item.price)}>M {item.medium}</button>{" "}
            <button onClick={addSmallToCartHandler.bind(null, item.key, item.name, item.price)}>S {item.small}</button>
          </li>
        ))}
      </ul>
      <button onClick={props.onClick}>Order {totalOrders}</button>
    </React.Fragment>
  );
};

export default AvailableMenu;
