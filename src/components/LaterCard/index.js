import './index.css';
export default function LaterCard({ item, removeFromLater, deleteFromLater }) {
  console.log(item);
  function remove() {
    removeFromLater(item);
  }
  function deleteItem() {
    deleteFromLater(item);
  }
  return (
    <div className="laterCard">
      <img src={item.pictures[0]} alt="product"></img>
      <h3>{item.title}</h3>
      <h2>£{item.price}</h2>
      <button id="moveButton" onClick={remove}>
        Move to Basket
      </button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}
