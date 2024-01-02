import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./store/AuthProvider";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseProvider from "./store/ExpenseProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ExpenseProvider>
        <App />
      </ExpenseProvider>
    </AuthProvider>
  </BrowserRouter>
);
