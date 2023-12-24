import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import StorePage from "./pages/Store";

const router = createBrowserRouter([
  { path: "/about", element: <AboutPage /> },
  { path: "/store", element: <StorePage /> },
  { path: "/", element: <StorePage /> },
  

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
