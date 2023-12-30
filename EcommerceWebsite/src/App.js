import "./App.css";
import React, { useContext } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import StorePage from "./pages/Store";
import ContactUsPage from "./pages/ContactUs";
import ProductPage from "./pages/Product";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";

import CartProvider from "./store/CartProvider";
import AuthProvider from "./store/AuthProvider";
import Layout from "./components/Layout";

import AuthContext from "./store/authContext";

// const router = createBrowserRouter([
//   { path: "/about", element: <AboutPage /> },
//   { path: "/store", element: <StorePage /> },
//   { path: "/", element: <StorePage /> },
//   { path: "/home", element: <HomePage /> },
//   { path: "/contactUs", element: <ContactUsPage /> },
//   { path: "/:productId", element: <ProductPage /> },
//   { path: "*", element: <NotFound /> },
// ]);

function App() {
  // return <RouterProvider router={router} />;

  // const [show, setShow] = useState(false);

  // const showCart = () => {
  //   setShow(true);
  // };

  // const hideCart = () => {
  //   setShow(false);
  // };

  const authCtx = useContext(AuthContext);

  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          {/* <Navigation onClick={showCart} />
      {show && <Cart show={show} onClick={hideCart} />} */}
          <Switch>
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/store" exact>
              {authCtx.idToken !== null && <StorePage />}
              {authCtx.idToken === null && <Redirect to="/auth" />}
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/contactUs">
              <ContactUsPage />
            </Route>
            <Route path="/store/:productId">
              <ProductPage />
            </Route>
            <Route path="/auth">
              {authCtx.idToken !== null && <Redirect to="/store" />}
              {authCtx.idToken === null && <LoginPage />}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <RouterProvider router={router} /> */}
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
