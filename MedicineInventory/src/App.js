import React from "react";

import "./App.css";

import AddMedicineMenu from "./components/AddMedicineMenu";
import MedicineList from "./components/MedicineList";
import Cart from "./components/Cart";

import MedicineListProvider from "./store/MedicineListProvider";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <MedicineListProvider>
      <CartProvider>
        <AddMedicineMenu />
        <MedicineList />
        <Cart />
      </CartProvider>
    </MedicineListProvider>
  );
}

export default App;
