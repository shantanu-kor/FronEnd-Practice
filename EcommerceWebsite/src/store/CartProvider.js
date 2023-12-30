import React, { useState, useContext } from "react";
import CartContext from "./cartContext";
import AuthContext from "./authContext";

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

  const authCtx = useContext(AuthContext);

  let email = authCtx.email;

  if (email === null) {
    email = "dummy@dummy.com";
  }

  const [products, setProducts] = useState([]);

  if (localStorage.getItem(`cart${email}`) === null) {
    localStorage.setItem(`cart${email}`, JSON.stringify(products));
  }
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
    localStorage.setItem(`cart${email}`, JSON.stringify(items));
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
      localStorage.setItem(`cart${email}`, JSON.stringify(items));
    }
  };

  const cartProvider = {
    productList: JSON.parse(localStorage.getItem(`cart${email}`)),
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
