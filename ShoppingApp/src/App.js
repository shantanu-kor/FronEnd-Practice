import React, { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./store/cart";

function App() {
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart.showCart);

  const cart = useSelector((state) => state.cart.cartProducts);

  const [sending, setSending] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    async function send() {
      try {
        const res = await fetch(
          "https://shoppingapp-75c61-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
        );
        const data = await res.json();
        if (!res.ok) {
          if (data && data.error && data.error.message) {
            setError(true);
          }
        } else {
          if (data === null) {
            dispatch(cartActions.setCart([]));
          } else {
            dispatch(cartActions.setCart(data));
          }
        }
      } catch {
        setError(true);
      }
    }
    send();
  }, [dispatch]);

  useEffect(() => {
    setSending(true);
    async function send() {
      try {
        const res = await fetch(
          "https://shoppingapp-75c61-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        const data = await res.json();
        if (!res.ok) {
          if (data && data.error && data.error.message) {
            setError(true);
          }
        }
      } catch {
        setError(true);
      }
    }
    send();
    setSending(false);
  }, [cart]);

  return (
    <React.Fragment>
      {error ? (
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <p>Error</p>
          <p style={{ textAlign: "right" }}>Sending cart data failed!</p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "cyan",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <p>Success!</p>
          <p style={{ textAlign: "right" }}>Sent cart data successfully!</p>
        </div>
      )}
      {sending && (
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <p>Sending...</p>
          <p style={{ textAlign: "right" }}>Sending cart data!</p>
        </div>
      )}
      <Layout>
        {cartState && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
