import './index.css';
function ProductCard({ title, price, rating, pictures }) {
  return (
    <div className="productCard">
      <div>{title}</div>
      <div>${price}</div>
      <div>Rating out of 5: {rating}</div>
      <img src={pictures[0]} alt="product"></img>
    </div>
  );
}

export default ProductCard;
