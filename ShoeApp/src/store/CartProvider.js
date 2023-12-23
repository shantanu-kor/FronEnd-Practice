import React, { useState } from "react";

import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [shoesList, setShoeList] = useState([]);
  const addShoeHandler = (key, name, price, large, medium, small) => {
    let shoes = shoesList;
    const shoeIndex = shoes.findIndex((shoe) => key === shoe.key);
    if (shoeIndex === -1) {
      shoes = [
        ...shoes,
        {
          key: key,
          name: name,
          large: large,
          medium: medium,
          small: small,
          totalPrice: price * (large + medium + small),
        },
      ];
    } else {
      const newShoe = {
        ...shoes[shoeIndex],
        large: shoes[shoeIndex].large + large,
        medium: shoes[shoeIndex].medium + medium,
        small: shoes[shoeIndex].small + small,
        totalPrice:
          shoes[shoeIndex].totalPrice + price * (large + medium + small),
      };
      shoes[shoeIndex] = newShoe;
    }
    setShoeList(shoes);
  };

  const cartContext = {
    shoeList: shoesList,
    addShoe: addShoeHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
