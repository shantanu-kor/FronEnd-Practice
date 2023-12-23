import React, { useState, useContext } from "react";

import OrderContext from "./orderContext";
import CartContext from "./cartContext";

const OrderProvider = (props) => {
  const [orderList, setOrderList] = useState([]);

  const addOrderToMenu = (
    shoeName,
    description,
    price,
    large,
    medium,
    small
  ) => {
    setOrderList((prevState) => {
      return [
        ...prevState,
        {
          key: Math.random().toString(),
          name: shoeName,
          description: description,
          price: price,
          large: large,
          medium: medium,
          small: small,
        },
      ];
    });
  };

  const cartCtx = useContext(CartContext);

  const orderItem = (key, name, price, size) => {
    const itemIndex = orderList.findIndex((item) => item.key === key);
    let itemList = [...orderList];
    if (size === "large") {
      const amount = itemList[itemIndex].large;
      if (amount !== 0) {
        itemList[itemIndex] = { ...itemList[itemIndex], large: amount - 1 };
        cartCtx.addShoe(key, name, price, 1, 0, 0);
      }
    } else if (size === "medium") {
      const amount = itemList[itemIndex].medium;
      if (amount !== 0) {
        itemList[itemIndex] = { ...itemList[itemIndex], medium: amount - 1 };
        cartCtx.addShoe(key, name, price, 0, 1, 0);
      }
    } else if (size === "small") {
      const amount = itemList[itemIndex].small;
      if (amount !== 0) {
        itemList[itemIndex] = { ...itemList[itemIndex], small: amount - 1 };
        cartCtx.addShoe(key, name, price, 0, 0, 1);
      }
    }

    setOrderList(itemList);
  };

  const orderContext = {
    items: orderList,
    addItem: addOrderToMenu,
    orderItem: orderItem,
  };

  return (
    <OrderContext.Provider value={orderContext}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
