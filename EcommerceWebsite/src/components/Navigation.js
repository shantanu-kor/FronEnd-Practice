import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import CartContext from "../store/cartContext";
import AuthContext from "../store/authContext";

const Navigation = (props) => {
  const cartCtx = useContext(CartContext);
  const AuthCtx = useContext(AuthContext);

  let count = 0;
  cartCtx.productList.forEach((item) => (count += item.quantity));
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <h1>The Generics</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/home"
              className="mx-3"
              style={(isActive) => ({
                color: isActive ? "black" : "blue",
                textDecoration: "inherit",
              })}
            >
              <h4>Home</h4>
            </NavLink>
            <NavLink
              to="/store"
              className="mx-3"
              style={(isActive) => ({
                color: isActive ? "black" : "blue",
                textDecoration: "inherit",
              })}
            >
              <h4>Store</h4>
            </NavLink>
            <NavLink
              to="/about"
              className="mx-3"
              style={(isActive) => ({
                color: isActive ? "black" : "blue",
                textDecoration: "inherit",
              })}
            >
              <h4>About</h4>
            </NavLink>
            <NavLink
              to="/contactUs"
              className="mx-3"
              style={(isActive) => ({
                color: isActive ? "black" : "blue",
                textDecoration: "inherit",
              })}
            >
              <h4>Contact Us</h4>
            </NavLink>
            <NavLink
              to="/auth"
              className="mx-3"
              style={(isActive) => ({
                color: isActive ? "black" : "blue",
                textDecoration: "inherit",
              })}
            >
              <h4>Login</h4>
            </NavLink>
            {AuthCtx.idToken && (
              <Button
                className="position-absolute end-0"
                variant="warning"
                onClick={props.onClick}
              >
                Cart <sup>{count}</sup>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav
    //   style={{
    //     backgroundColor: "black",
    //     height: "100px",
    //     textAlign: "center",
    //     color: "white",
    //   }}
    // >
    //   <h1>The Generics</h1>
    //   <NavLink to="/home">Home</NavLink>
    //   <NavLink to="/store">Store</NavLink>
    //   <NavLink to="/about">About</NavLink>
    //   <NavLink to="/contactUs">Contact Us</NavLink>
    // </nav>
  );
};

export default Navigation;
