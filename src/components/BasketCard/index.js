function BasketCard({ title, price, rating, pictures, count }) {
  console.log('basketCard refresh');

  return (
    <div className="productCard">
      <img src={pictures[0]} alt="product"></img>
      <div>
        <div>{title}</div>
        <div>${price}</div>
        <div>Rating out of 5: {rating}</div>
        <div>Quantity: {count}</div>
      </div>
    </div>
  );
}

export default BasketCard;
