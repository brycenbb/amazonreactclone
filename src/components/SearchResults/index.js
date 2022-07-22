import './index.css';
import { useContext } from 'react';
import { searchContext } from '../../contexts/contexts.js';
import products from './results';
import { v4 as uuidv4 } from 'uuid';
function SearchResults() {
  const { searchTerm } = useContext(searchContext);

  //will fetch data on what was searched
  // return <div className="SR"> You searched for {searchTerm}</div>;

  return (
    <div className="SR">
      {' '}
      {products.map((item) => {
        return (
          <div key={uuidv4()} className="SR">
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
