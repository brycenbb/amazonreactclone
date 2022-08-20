import { cartContext } from '../../contexts/contexts.js';
import { useContext } from 'react';
import './index.css';
import Checkout from '../Checkout/index.js';
import { useNavigate } from 'react-router-dom';
function Total({ price }) {
  const { cart } = useContext(cartContext);
  let navigate = useNavigate();
  return (
    <article className="articleSubtotal">
      <div>
        Subtotal{' '}
        {cart.length === 1 ? '(1 item)' : '(' + cart.length + ' items)'}:
        <b> £{price}</b>
      </div>
      <button
        className="checkoutButton"
        onClick={() => {
          navigate('/checkout');
        }}
      >
        Proceed to Checkout
      </button>
    </article>
  );
}

export default Total;
