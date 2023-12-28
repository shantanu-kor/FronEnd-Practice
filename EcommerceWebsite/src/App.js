import "./App.css";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import StorePage from "./pages/Store";
import ContactUsPage from "./pages/ContactUs";
import ProductPage from "./pages/Product";

import Navigation from "./components/Navigation";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";

const router = createBrowserRouter([
  { path: "/about", element: <AboutPage /> },
  { path: "/store", element: <StorePage /> },
  { path: "/", element: <StorePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/contactUs", element: <ContactUsPage /> },
  { path: "/:productId", element: <ProductPage /> },
]);

function App() {
  // return <RouterProvider router={router} />;

  const [show, setShow] = useState(false);

  const showCart = () => {
    setShow(true);
  };

  const hideCart = () => {
    setShow(false);
  };

  return (
    <CartProvider>
      <Navigation onClick={showCart} />
      {show && <Cart show={show} onClick={hideCart} />}
      {/* <Route path="/">
        <StorePage />
      </Route>
      <Route path="/store">
        <StorePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route> */}
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
