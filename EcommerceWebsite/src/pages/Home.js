import React, { useState } from "react";

import Navigation from "../components/Navigation";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart";
import { Button, Container, ListGroup } from "react-bootstrap";

const HomePage = () => {
  const [show, setShow] = useState(false);

  const showCart = () => {
    setShow(true);
  };

  const hideCart = () => {
    setShow(false);
  };

  const tours = [
    ["JUL 16", "DETROIT, MI", "DTE ENERGY MUSIC THEATRE"],
    ["JUL 19", "TORONTO, ON", "BUDWEISER STAGE"],
    ["JUL 22", "BRISTOW, VA", "JIGGY LUBE LIVE"],
    ["JUL 29", "PHOENIX, AZ", "AK-CHIN PAVILION"],
    ["AUG 2", "LAS VEGAS, NV", "T-MOBILE ARENA"],
    ["AUG 7", "CONCORD, CA", "CONCORD PAVILION"],
  ];

  return (
    <CartProvider>
      <Navigation onClick={showCart} />;
      {show && <Cart show={show} onClick={hideCart} />}
      <Container style={{ backgroundColor: "grey", textAlign: "center" }}>
        <h1 style={{ color: "white" }}>The Generics</h1>
        <Button variant="dark" className="mt-3" style={{ color: "white" }}>
          Get Our Latest Album
        </Button>
        <br />
        <Button variant="dark" className="mt-3 mb-3" style={{ color: "white" }}>
          Play
        </Button>
      </Container>
      <h2 className="mt-3 mb-3" style={{ textAlign: "center" }}>
        Tours
      </h2>
      <ListGroup>
        {tours.map((item) => (
          <ListGroup.Item style={{textAlign: "center"}}>
            {item[0]} | {item[1]} | {item[2]} | <Button>Buy Tickets</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </CartProvider>
  );
};

export default HomePage;
