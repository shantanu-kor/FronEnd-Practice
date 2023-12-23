import "./App.css";

import React, { useState } from "react";
import OrderMenu from "./components/OrderMenu";
import InputMenu from "./components/InputMenu";
import AvailableMenu from "./components/AvailableMenu";

import OrderProvider from "./store/OrderProvider";
import CartProvider from "./store/CartProvider";

function App() {
  const [showOrderMenu, setShowOrderMenu] = useState(false);

  const showOrderMenuHandler = () => {
    setShowOrderMenu(true);
  };

  const hideOrderMenuHandler = () => {
    setShowOrderMenu(false);
  };

  return (
    <CartProvider>
      <OrderProvider>
        <InputMenu />
        <AvailableMenu onClick={showOrderMenuHandler} />
        {showOrderMenu && <OrderMenu onClick={hideOrderMenuHandler} />}
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
