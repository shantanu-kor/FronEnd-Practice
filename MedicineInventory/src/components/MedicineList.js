import React, { useContext } from "react";

import MedicineListContext from "../store/medicineListContext";
import CartContext from "../store/cartContext";

const MedicineList = () => {
  const medListCtx = useContext(MedicineListContext);
  const CartCtx = useContext(CartContext);

  const addToCartHandler = (id) => {
    medListCtx.removeMedicine(id);
    CartCtx.addMedicine(id);
  };

  return (
    <React.Fragment>
      <h1>Inventory</h1>
      <span>Medicine | Description | Price | Quantity</span>
      <ul>
        {medListCtx.medicineList.map((item) => (
          <li>
            {item.medicineName} | {item.description} | {item.price} |{" "}
            {item.quantity}{" "}
            {item.quantity === 0 ? (
              <button disabled>Add to Cart</button>
            ) : (
              <button onClick={addToCartHandler.bind(null, item.key)}>
                Add to Cart
              </button>
            )}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default MedicineList;
