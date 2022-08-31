import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../SearchResults/results';
import './index.css';
import { cartContext } from '../../contexts/contexts.js';

import starF from '../../assests/star.svg';
import starH from '../../assests/star-half.svg';
export default function ProductPage() {
  let params = useParams();
  let history = useNavigate();
  const { addtoCart } = useContext(cartContext);
  function handleClick() {
    history('/search');
  }
  let product = products.filter(
    (item) => item.product_id === Number(params.product_id)
  )[0];
  const [currImage, setCurrImage] = useState(product.pictures[0]);
  console.log(product);
  function setHover(status, e, index) {
    if (status) {
      setCurrImage(product.pictures[index]);
      console.log(e.target);
      let prevImage = document.querySelector('.chosen-image');
      prevImage ? prevImage.classList.remove('chosen-image') : <></>;
      e.target.classList.add('chosen-image');
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements[0].value);
    addtoCart(product, Number(e.target.elements[0].value));
  }
  let priceArray = product.price.toLocaleString('en-US').split('.');
  console.log(priceArray);
  let starArray = [];
  for (let i = 0; i < Math.floor(product.rating); i++) {
    starArray.push(
      <img src={starF} className="full star" alt="Full star rating"></img>
    );
  }
  if (product.rating % 1 !== 0) {
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
    <main className="product-main">
      <button onClick={handleClick} className="back-to-results">
        Back to results
      </button>
      <section className="product-primary-information">
        <div className="product-image-mini-container">
          {product.pictures.map((item, index) => {
            return (
              <img
                key={index}
                alt="product images"
                src={item}
                className="product-image-mini"
                onMouseEnter={(e) => {
                  setHover(true, e, index);
                }}
                onMouseLeave={(e) => {
                  setHover(false, e, index);
                }}
              ></img>
            );
          })}
        </div>
        <div className="product-image-large-container">
          <img
            alt="enlarged product"
            src={currImage}
            className="product-image-large"
          ></img>
        </div>
        <div className="product-information-details-container">
          <h3 className="product-title">{product.title}</h3>
          <div className="rating-container breakLine">
            {starArray.map((item) => {
              return item;
            })}
          </div>
          <div className="product-price-main">
            <div>Price:</div>
            <div>£{product.price}</div>
          </div>
        </div>
        <div className="product-checkout-container">
          <div>£{product.price}</div>
          <div style={{ color: '#007600', fontWeight: '600' }}>In Stock</div>
          <form className="product-form" onSubmit={handleSubmit}>
            <label>
              Qty:{'  '}
              <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>{' '}
            </label>
            <button>Add to Basket</button>
          </form>
          <div className="product-information-fake">
            <div>Dispatches from</div>
            <div>REDACTED</div>
          </div>
          <div className="product-information-fake">
            <div>Sold by</div>
            <div>REDACTED</div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section>Product information</section>
    </main>
  );
}
