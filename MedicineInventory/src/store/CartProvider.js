import React, { useState, useContext } from "react";

import MedicineListContext from "./medicineListContext";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const medListCtx = useContext(MedicineListContext);
  const [medList, setMedList] = useState([]);

  
  const addMedHandler = (id) => {
    const index = medList.findIndex(item => item.key === id);
    if (index === -1) {
        const lisIndex = medListCtx.medicineList.findIndex(item => item.key === id);
        const med = {...medListCtx.medicineList[lisIndex], quantity: 1};
        setMedList(prevState => [...prevState, med]);
    }
    else {
        let lis = [...medList];
        const med = {...medList[index], quantity: medList[index].quantity + 1};
        lis[index] = med;
        setMedList(lis);
    }
  };

  const cartProvider = {
    medicineList: medList,
    addMedicine: addMedHandler,
  };

  return (
    <CartContext.Provider value={cartProvider}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
