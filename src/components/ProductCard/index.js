import './index.css';
import { cartContext } from '../../contexts/contexts.js';
import { useContext } from 'react';

function ProductCard({ item, title, price, rating, pictures }) {
  const { addtoCart } = useContext(cartContext);
  function handleClick() {
    addtoCart(item);
  }
  return (
    <div className="productCard">
      <img src={pictures[0]} alt="product"></img>
      <div>
        <div>{title}</div>
        <div>£{price}</div>
        <div>Rating out of 5: {rating}</div>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
