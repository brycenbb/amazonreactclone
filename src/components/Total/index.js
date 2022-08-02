import { cartContext } from '../../contexts/contexts.js';
import { useContext } from 'react';

function Total() {
  const { cart } = useContext(cartContext);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].count;
  }
  total = total.toFixed(2);
  return <div>Total price: ${total}</div>;
}

export default Total;
