import React from "react";

const TotalPrice = (props) => {

    const itemList = props.items.map((item) => item.sellingPrice)
    let sum = 0;
    for (let i of itemList) {
        sum += parseInt(i);
    }
    return (
        <React.Fragment>
            <h2>Total Value Worth of Products: Rs. {sum}</h2>
        </React.Fragment>
    );
}

export default TotalPrice;