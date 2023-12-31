import React, { useContext } from "react";

import CartContext from "../store/cartContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      <h1>Cart</h1>
      <span>Medicine | Description | Price | Quantity</span>
      <ul>
        {cartCtx.medicineList.map((item) => (
          <li>
            {item.medicineName} | {item.description} | {item.price} |{" "}
            {item.quantity}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Cart;
