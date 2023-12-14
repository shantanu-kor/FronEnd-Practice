import React from "react";

const NameAge = (props) => {
    return (
        <li>
            {`${props.name} (${props.age} years old)`}
        </li>
    );
}

export default NameAge;