import CartContext from "./cart-content";

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {

    };
    
    const removeItemFromCartHandler = (id) => {

    };

    const cartContext = {
        items: [],
        total: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
