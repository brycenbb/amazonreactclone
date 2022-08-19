import './index.css';
function BasketCard({
  updateQuantity,
  item,
  title,
  price,
  rating,
  pictures,
  count,
  addToLater,
}) {
  console.log('basketCard refresh');
  function handleClick() {
    updateQuantity(item, 0);
  }
  function handleChange(e) {
    console.log(e.target.value);
    updateQuantity(item, Number(e.target.value));
  }
  function moveItem() {
    addToLater(item);
    updateQuantity(item, 0);
  }
  return (
    <div className="productCard">
      <img src={pictures[0]} alt="product"></img>
      <div>
        <div>{title}</div>
        <div>£{price}</div>
        <div>Rating out of 5: {rating}</div>
        <div id="optionContainer">
          <div>
            <label htmlFor="quantity" style={{ margin: 0 }}>
              Qty:{' '}
            </label>
            <select
              id="quantitySelect"
              defaultValue={count}
              name="quantity"
              onChange={handleChange}
              style={{ width: '55px' }}
            >
              <option value={0}>0 (delete)</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option id="option10" value={10}>
                10+
              </option>
            </select>
          </div>
          <hr className="vertical"></hr>
          <button onClick={handleClick}>Delete</button>
          <hr className="vertical"></hr>

          <button onClick={moveItem}>Save for later</button>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
