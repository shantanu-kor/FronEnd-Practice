import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import CartContext from "../store/cartContext";

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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Button onClick={props.onClick}>Cart {count}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
