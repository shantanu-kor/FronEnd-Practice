import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import CartContext from "../store/cartContext";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const cartCtx = useContext(CartContext);
  let count = 0;
  cartCtx.productList.forEach((item) => (count += item.quantity));
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="store">Store</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contactUs">Contact Us</Nav.Link>
            <Button className="position-absolute end-0" variant="warning" onClick={props.onClick}>Cart <sup>{count}</sup></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
