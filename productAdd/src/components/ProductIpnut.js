import React from "react";

const ProductInput = (props) => {

    const submittedHandler = (event) => {
        event.preventDefault();
        const productId = document.getElementById("id").value;
        const productSellingPrice = document.getElementById("sellingPrice").value;
        const productName = document.getElementById("productName").value;
        localStorage.setItem(productId, JSON.stringify({sellingPrice: productSellingPrice, productName: productName, key: productId}));
        props.change();
        document.getElementById("id").value = '';
        document.getElementById("sellingPrice").value = '';
        document.getElementById("productName").value = ''
    }
    
    return (
        <form onSubmit={submittedHandler}>
            <label htmlFor="id">Product ID</label>
            <input type="text" id="id" required/>
            <label htmlFor="sellingPrice">Selling Price</label>
            <input type="number" id="sellingPrice" min="0" required />
            <label htmlFor="productName" >Product Name</label>
            <input type="text" id="productName" required/>
            <button type="submit" >Add Product</button>
        </form>
    );
}

export default ProductInput;