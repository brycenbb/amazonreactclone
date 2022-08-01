import { cartContext } from '../../contexts/contexts.js';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';

function Basket() {
  const { cart } = useContext(cartContext);
  console.log(cart);
  return (
    <div>
      <Header></Header>
      {cart.map((item) => {
        return (
          <div>
            <div key={uuidv4()}>
              {' '}
              {item.name} , {item.price}
            </div>
          </div>
        );
      })}{' '}
    </div>
  );
}

export default Basket;
