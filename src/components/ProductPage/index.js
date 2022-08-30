import { useParams, useNavigate } from 'react-router-dom';
import products from '../SearchResults/results';

export default function ProductPage() {
  let params = useParams();
  let history = useNavigate();
  function handleClick() {
    history('/search');
  }
  let product = products.filter(
    (item) => item.product_id === Number(params.product_id)
  );
  console.log(product);
  return (
    <div>
      <button onClick={handleClick}>Back to results</button>;
      <div>{product[0].title}</div>
    </div>
  );
}
