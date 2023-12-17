import React from "react";

const ProductList = (props) => {
  const itemList = props.items;
  const deleteProductHandler = (event) => {
    const li = event.target.parentElement;
    localStorage.removeItem(li.id);
    document.getElementById("productList").removeChild(li);
    props.change();
  }
  return (
    <React.Fragment>
      <h2>Products</h2>
      <ul id="productList">
        {itemList.map((item) => (
          <li id={item.key}>{item.sellingPrice} - {item.productName}
          <button type="button" onClick={deleteProductHandler}>Delete Product</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ProductList;
