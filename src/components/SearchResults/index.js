import './index.css';
import { useContext } from 'react';
import { searchContext } from '../../contexts/contexts.js';

function SearchResults() {
  const { searchTerm } = useContext(searchContext);

  //will fetch data on what was searched
  return <div className="SR"> You searched for {searchTerm}</div>;
}

export default SearchResults;
