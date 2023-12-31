import React, { useRef, useContext } from "react";

import MedicineListContext from "../store/medicineListContext";

const AddMedicineMenu = () => {
  const medListCtx = useContext(MedicineListContext);

  const medicineNameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const medicineName = medicineNameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;

    medListCtx.addMedicine({
      medicineName: medicineName,
      description: description,
      price: price,
      quantity: quantity,
    });

    medicineNameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} style={{ textAlign: "center" }}>
      <label htmlFor="medicineName">Medicine Name</label>
      <br />
      <input type="text" id="medicineName" ref={medicineNameRef} required />
      <br />
      <label htmlFor="description">Description</label>
      <br />
      <input type="text" id="description" ref={descriptionRef} required />
      <br />
      <label htmlFor="price">Price</label>
      <br />
      <input type="number" min="1" id="price" ref={priceRef} required />
      <br />
      <label htmlFor="quantity">Quantity</label>
      <br />
      <input
        type="number"
        min="1"
        step="1"
        id="quantity"
        ref={quantityRef}
        required
      />
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddMedicineMenu;
