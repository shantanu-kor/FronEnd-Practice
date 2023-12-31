import React from "react";

const CartContext = React.createContext({
    medicineList: [],
    addMedicine: () => {}, 
});

export default CartContext;