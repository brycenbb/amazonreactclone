import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../SearchResults/results';
import './index.css';
import starF from '../../assests/star.svg';
import starH from '../../assests/star-half.svg';
export default function ProductPage() {
  let params = useParams();
  let history = useNavigate();
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
      prevImage.classList.remove('chosen-image');
      e.target.classList.add('chosen-image');
    }
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
          <div className="rating-container">
            {starArray.map((item) => {
              return item;
            })}
          </div>
        </div>
      </section>
      <section>Product information</section>
    </main>
  );
}
