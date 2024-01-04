import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector } from 'react-redux';

function App() {
  const cartState = useSelector(state => state.cart.showCart);
  return (
    <Layout>
      {cartState && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
