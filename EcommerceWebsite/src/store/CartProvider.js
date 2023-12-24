import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const staticproducts = [
    {
      key: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      key: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      key: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  const [products, setProducts] = useState([]);

  const removeProductHandler = (key) => {
    const itemIndex = products.findIndex((item) => item.key === key);
    let items = [...products];
    if (items[itemIndex].quantity > 1) {
      items[itemIndex] = {
        ...items[itemIndex],
        quantity: items[itemIndex].quantity - 1,
      };
    } else {
      items.splice(itemIndex, 1);
    }
    setProducts(items);
  };

  const addProductHandler = (key, title, price, imageUrl) => {
    const itemIndex = products.findIndex((item) => item.key === key);
    if (itemIndex === -1) {
      const product = {
        key: key,
        quantity: 1,
        title: title,
        price: price,
        imageUrl: imageUrl,
      };
      setProducts((prevState) => [...prevState, product]);
    } else {
      let items = [...products];
      items[itemIndex] = {
        ...items[itemIndex],
        quantity: items[itemIndex].quantity + 1,
      };
      setProducts(items);
    }
  };

  const cartProvider = {
    productList: products,
    removeProduct: removeProductHandler,
    addProduct: addProductHandler,
  };

  return (
    <CartContext.Provider value={cartProvider}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;