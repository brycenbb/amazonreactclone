function BasketCard({
  updateQuantity,
  item,
  title,
  price,
  rating,
  pictures,
  count,
}) {
  console.log('basketCard refresh');
  function handleClick() {
    updateQuantity(item);
  }
  return (
    <div className="productCard">
      <img src={pictures[0]} alt="product"></img>
      <div>
        <div>{title}</div>
        <div>${price}</div>
        <div>Rating out of 5: {rating}</div>
        <div>Quantity: {count}</div>
        <button onClick={handleClick}>Remove 1 item</button>
      </div>
    </div>
  );
}

export default BasketCard;
