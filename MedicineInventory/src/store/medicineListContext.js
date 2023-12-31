import React from "react";

const MedicineListContext = React.createContext({
    medicineList: [],
    addMedicine: (med) => {},
    removeMedicine: (id) => {},
})

export default MedicineListContext;