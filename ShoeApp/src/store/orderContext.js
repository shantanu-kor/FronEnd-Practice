import React from "react";

const OrderContext = React.createContext({
    items: [],
    addItem: () => {},
    orderItem: () => {}
});

export default OrderContext;