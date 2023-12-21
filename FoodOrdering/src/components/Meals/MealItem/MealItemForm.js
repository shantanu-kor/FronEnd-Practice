import React, { useContext, useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-content";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const [amountIsValid, setAmountIsValid] = useState(true);
  const addItemsToCart = (event) => {
    event.preventDefault();
    // update the CartContext.items
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={addItemsToCart}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
      {!amountIsValid && <p>Please Enter a valid Amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
