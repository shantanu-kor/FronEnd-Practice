import React, {useState} from "react";

import MedicineListContext from "./medicineListContext";

const MedicineListProvider = (props) => {
    
    const [medList, setMedList] = useState([]);
    const addMedicineHandler = (med) => {
        setMedList(prevState => [...prevState, {...med, key: Math.random().toString()}])
    };
    const removeMedicineHandler = (id) => {
        const index = medList.findIndex(item => item.key === id);
        const lis = [...medList];
        if (lis[index].quantity > 0){
            lis[index].quantity -= 1;
        }
        setMedList(lis);
    };

    const medicineProvider = {
        medicineList: medList,
        addMedicine: addMedicineHandler,
        removeMedicine: removeMedicineHandler,
    }
    
    return (
        <MedicineListContext.Provider value={medicineProvider}>
            {props.children}
        </MedicineListContext.Provider>
    );
};

export default MedicineListProvider;