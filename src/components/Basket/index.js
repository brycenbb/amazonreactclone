import { cartContext, laterContext } from '../../contexts/contexts.js';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import BasketCard from '../BasketCard/index.js';
import LaterCard from '../LaterCard/index.js';
import Total from '../Total/index.js';
import './index.css';
function Basket() {
  console.log('basket refresh');

  const { cart, updateQuantity } = useContext(cartContext);
  const { laterItems, addToLater, deleteFromLater, removeFromLater } =
    useContext(laterContext);
  console.log('cart', cart);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].count;
  }
  total = total.toFixed(2);
  console.log('total is', total);
  return (
    <div>
      {/* //title, price, rating, pictures, count */}
      <Header></Header>
      <main id="mainBasket">
        <div id="cartLeft">
          <section id="shoppingBasket">
            <h1>Shopping Basket</h1>
            <div className="line">
              <div>Price</div>
              <hr></hr>
            </div>
            {cart.map((item) => {
              return (
                <>
                  <BasketCard
                    key={uuidv4()}
                    item={item}
                    updateQuantity={updateQuantity}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    pictures={item.pictures}
                    count={item.count}
                    addToLater={addToLater}
                  ></BasketCard>
                  <hr></hr>
                </>
              );
            })}
            <div id="basketSubtotal">
              Subtotal: <b>£{total}</b>
            </div>
          </section>
          <section id="yourItems">
            <h3>Your Items</h3>
            {laterItems.map((item) => {
              return (
                <LaterCard
                  item={item}
                  removeFromLater={removeFromLater}
                  deleteFromLater={deleteFromLater}
                ></LaterCard>
              );
            })}
          </section>
        </div>
        <div>
          <Total price={total}></Total>
        </div>
      </main>
    </div>
  );
}

export default Basket;
