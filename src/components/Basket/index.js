import { cartContext } from '../../contexts/contexts.js';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import BasketCard from '../BasketCard/index.js';
function Basket() {
  console.log('basket refresh');

  const { cart } = useContext(cartContext);
  console.log(cart);
  let total = 0;
  return (
    <div>
      {/* //title, price, rating, pictures, count */}
      <Header></Header>
      {cart.map((item) => {
        total += item.price;
        return (
          <BasketCard
            key={uuidv4()}
            title={item.title}
            price={item.price}
            rating={item.rating}
            pictures={item.pictures}
            count={item.count}
          ></BasketCard>
        );
      })}
      <div>Total price: ${total}</div>
    </div>
  );
}

export default Basket;
