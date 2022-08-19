import { cartContext } from '../../contexts/contexts.js';
import { useContext } from 'react';
import './index.css';
function Total({ price }) {
  const { cart } = useContext(cartContext);
  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   total += cart[i].price * cart[i].count;
  // }
  // total = total.toFixed(2);
  return (
    <article className="articleSubtotal">
      <div>
        Subtotal{' '}
        {cart.length === 1 ? '(1 item)' : '(' + cart.length + ' items)'}:
        <b> £{price}</b>
      </div>
      <button className="checkoutButton">Proceed to Checkout</button>
    </article>
  );
}

export default Total;
