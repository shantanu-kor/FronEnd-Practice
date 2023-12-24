import React from "react";

const CartContext = React.createContext({
    productList: [],
    removeProduct: () => {}
});

export default CartContext;