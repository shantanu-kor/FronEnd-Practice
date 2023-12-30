import React, { useState } from "react";
import Navigation from "./Navigation";
import Cart from "./Cart";

const Layout = (props) => {
  const [show, setShow] = useState(false);

  const showCart = () => {
    setShow(true);
  };

  const hideCart = () => {
    setShow(false);
  };

  return (
    <React.Fragment>
      <Navigation onClick={showCart} />
      {show && <Cart show={show} onClick={hideCart} />}
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
