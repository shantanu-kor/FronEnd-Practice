import "./App.css";
import React, { useContext, lazy, Suspense } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

// import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
import StorePage from "./pages/Store";
// import ContactUsPage from "./pages/ContactUs";
import ProductPage from "./pages/Product";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";

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

const AboutPage = lazy(() => import('./pages/About'));
const ContactUsPage = lazy(() => import('./pages/ContactUs'));
const HomePage = lazy(() => import('./pages/Home'));

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
          <Suspense fallback={<p>Loading...</p>}><AboutPage /></Suspense>
        </Route>
        <Route path="/home">
          <Suspense fallback={<p>Loading...</p>}><HomePage /></Suspense>
        </Route>
        <Route path="/contactUs">
          <Suspense fallback={<p>Loading...</p>}><ContactUsPage /></Suspense>
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
  );
}

export default App;
