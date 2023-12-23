import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: () => {},
});

export default CartContext;