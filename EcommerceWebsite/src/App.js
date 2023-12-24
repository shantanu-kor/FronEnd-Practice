import "./App.css";
import React, { useState } from "react";

import ProductList from "./components/ProductList";
import Navigation from "./components/Navigation";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart";

function App() {
  const productsArr = [
    {
      key: 'a',
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      key: 'b',
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      key: 'c',
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      key: 'd',
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [show, setShow] = useState(false);

  const showCart = () => {
    setShow(true);
  }

  const hideCart = () => {
    setShow(false)
  }

  return (
    <CartProvider>
      <Navigation onClick={showCart} />
      {show && <Cart show={show} onClick={hideCart}/>}
      <ProductList productsArr={productsArr} />
    </CartProvider>
  );
}

export default App;
