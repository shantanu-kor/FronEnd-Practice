import classes from './CartButton.module.css';

import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartItems = useSelector(state => state.cart.cartProducts);
  let sum = 0;
  cartItems.forEach(item => {
    sum += item.quantity; 
  })
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{sum}</span>
    </button>
  );
};

export default CartButton;
