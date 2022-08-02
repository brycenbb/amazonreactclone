import { cartContext } from '../../contexts/contexts.js';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import BasketCard from '../BasketCard/index.js';
import Total from '../Total/index.js';
function Basket() {
  console.log('basket refresh');

  const { cart, updateQuantity } = useContext(cartContext);
  console.log('cart', cart);

  return (
    <div>
      {/* //title, price, rating, pictures, count */}
      <Header></Header>
      {cart.map((item) => {
        return (
          <BasketCard
            key={uuidv4()}
            item={item}
            updateQuantity={updateQuantity}
            title={item.title}
            price={item.price}
            rating={item.rating}
            pictures={item.pictures}
            count={item.count}
          ></BasketCard>
        );
      })}
      <Total></Total>
    </div>
  );
}

export default Basket;
