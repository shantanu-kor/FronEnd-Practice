import React, { useContext, useRef } from "react";

import OrderContext from "../store/orderContext";

const InputMenu = () => {
  const orderCtx = useContext(OrderContext);

  const shoeNameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const largeRef = useRef();
  const mediumRef = useRef();
  const smallRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    orderCtx.addItem(
      shoeNameRef.current.value,
      descriptionRef.current.value,
      priceRef.current.value,
      largeRef.current.value,
      mediumRef.current.value,
      smallRef.current.value
    );
    shoeNameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    largeRef.current.value = "";
    mediumRef.current.value = "";
    smallRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="shoeName">Shoe Name</label>
      <input type="text" id="shoeName" required ref={shoeNameRef} />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" required ref={descriptionRef} />
      <label htmlFor="price">Price</label>
      <input type="number" min="0" id="price" required ref={priceRef} />
      <br />
      <label>Quantity Available</label>
      <br />
      <label htmlFor="large">L</label>
      <input
        type="number"
        min="0"
        step="1"
        id="large"
        required
        ref={largeRef}
      />
      <label htmlFor="medium">M</label>
      <input
        type="number"
        min="0"
        step="1"
        id="medium"
        required
        ref={mediumRef}
      />
      <label htmlFor="small">S</label>
      <input
        type="number"
        min="0"
        step="1"
        id="small"
        required
        ref={smallRef}
      />
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default InputMenu;
