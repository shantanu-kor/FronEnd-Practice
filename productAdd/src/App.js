import React, { useState } from "react";
import ProductInput from "./components/ProductIpnut";
import ProductList from "./components/ProductList";
import TotalPrice from "./components/TotalPrice";

function App() {
  let itemList = Object.values(localStorage);
  itemList = itemList.map((item) => JSON.parse(item));

  const [items, setItems] = useState(itemList);

  const changeHandler = () => {
    let itemList = Object.values(localStorage);
    itemList = itemList.map((item) => JSON.parse(item));
    setItems(itemList);
  };

  return (
    <React.Fragment>
      <ProductInput change={changeHandler} />
      <ProductList items={items} change={changeHandler} />
      <TotalPrice items={items} />
    </React.Fragment>
  );
}

export default App;
