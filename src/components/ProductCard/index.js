import './index.css';
import { cartContext } from '../../contexts/contexts.js';
import { useContext } from 'react';
import starF from '../../assests/star.svg';
import starH from '../../assests/star-half.svg';
import { useNavigate } from 'react-router-dom';

function ProductCard({ item, title, price, rating, pictures, id }) {
  const { addtoCart } = useContext(cartContext);
  let history = useNavigate();
  function handleClick() {
    addtoCart(item);
  }
  function handleRoute(id) {
    history(`/search/${id}`);
  }
  let priceArray = price.toLocaleString('en-US').split('.');
  console.log(priceArray);
  let starArray = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    starArray.push(
      <img src={starF} className="full star" alt="Full star rating"></img>
    );
  }
  if (rating % 1 !== 0) {
    starArray.push(
      <img src={starH} className="star" alt="Half star rating"></img>
    );
  }
  for (let i = starArray.length; i < 5; i++) {
    starArray.push(
      <img src={starH} className="star" alt="Empty star rating"></img>
    );
  }
  return (
    <div className="productCard">
      <img src={pictures[0]} alt="product"></img>
      <div>
        <div
          className="card-title"
          onClick={() => {
            handleRoute(id);
          }}
        >
          {title}
        </div>
        <div className="rating-container">
          {starArray.map((item) => {
            return item;
          })}
        </div>
        <div>
          <div className="card-price-symbol">£</div>
          <div className="card-price">{priceArray[0]}</div>
          <div className="card-price-coins">{priceArray[1] ?? '00'}</div>
        </div>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
