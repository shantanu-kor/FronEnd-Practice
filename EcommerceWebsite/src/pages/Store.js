import React from "react";

import ProductList from "../components/ProductList";

const StorePage = () => {
  const productsArr = [
    {
      key: "a",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      key: "b",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      key: "c",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      key: "d",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  productsArr.forEach((item) => {
    if (localStorage.getItem(item.key) === null) {
      localStorage.setItem(item.key, JSON.stringify(item));
    }
  });

  return <ProductList productsArr={productsArr} />;
};

export default StorePage;
