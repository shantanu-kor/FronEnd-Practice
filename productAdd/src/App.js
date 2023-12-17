import React, { useState } from "react";
import ProductInput from "./components/ProductIpnut";
import ProductList from "./components/ProductList";
import TotalPrice from "./components/TotalPrice";

function App() {

  let itemList = Object.values(localStorage);
  itemList = itemList.map((item) => JSON.parse(item));

  const [items, setItems] = useState(itemList)

  const changeHandler = () => {
    let itemList = Object.values(localStorage);
    itemList = itemList.map((item) => JSON.parse(item));
    setItems(itemList);
  };

  const productListAndTotalPrice = () => {
    const totalPrice = () => <TotalPrice items={items} />;

    return (
      <React.Fragment>
        <ProductList items={items} change={changeHandler}/>
        {totalPrice()}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <ProductInput change={changeHandler} />
      {productListAndTotalPrice()}
    </React.Fragment>
  );
}

export default App;
