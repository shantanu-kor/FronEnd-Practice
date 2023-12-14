import React from "react";
import NameAge from "./NameAge";

const NameAgeList = (props) => {

    return (
        <ul style={{textAlign: 'center', background: 'lightblue'}}>
            {props.list.map((nameage) => (
                <NameAge name={nameage.name} age={nameage.age}/>
            ))}
            
        </ul>
    );
}

export default NameAgeList;