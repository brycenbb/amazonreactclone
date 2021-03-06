import './index.css';
import { useContext, useEffect, useState } from 'react';
import { searchContext } from '../../contexts/contexts.js';
import products from './results';
import { v4 as uuidv4 } from 'uuid';
function SearchResults() {
  const minSim = 0.6; //similarity threshold needed to accept the item
  const { searchTerm } = useContext(searchContext);
  const [filtered, setFiltered] = useState([]);

  // useEffect(() => {
  //   async function Fetch(products) {
  //     let val;
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': process.env.REACT_APP_TEXT_API_KEY,
  //         'X-RapidAPI-Host': 'twinword-text-similarity-v1.p.rapidapi.com',
  //       },
  //     };
  //     console.log('about to fetch', products);
  //     for (let i = 0; i < products.length; i++) {
  //       let text1 = products[i].title;
  //       let response = await fetch(
  //         `https://twinword-text-similarity-v1.p.rapidapi.com/similarity/?text1=${searchTerm}&text2=${text1}`,
  //         options
  //       );
  //       let json = await response.json();
  //       val = json.similarity;
  //       console.log('title', searchTerm, products[i].title, val);
  //       if (val >= minSim) {
  //         setFiltered((filtered) => {
  //           return [...filtered, products[i]];
  //         });
  //         continue;
  //       }
  //       for (let j = 0; j < products[i].categories.length; j++) {
  //         let text1 = products[i].categories[j];
  //         let response = await fetch(
  //           `https://twinword-text-similarity-v1.p.rapidapi.com/similarity/?text1=${searchTerm}&text2=${text1}`,
  //           options
  //         );
  //         let json = await response.json();
  //         val = json.similarity;
  //         console.log(
  //           'category',
  //           products[i].title,
  //           searchTerm,
  //           products[i].categories,
  //           products[i].categories[j],
  //           val
  //         );

  //         if (val >= minSim) {
  //           console.log('adding to filtered', filtered, products[j]);
  //           setFiltered((filtered) => {
  //             return [...filtered, products[i]];
  //           });
  //           break;
  //         }
  //       }
  //     }
  //   }
  //   Fetch(products);
  // }, [searchTerm]);

  return (
    <main>
      <div id="filters">
        <div className="set">
          <div className="category">Condition</div>
          <div>New</div>
          <div>Renewed</div>
          <div>Used</div>
        </div>
        <div className="set">
          <div className="category">Delivery</div>
          <input type="checkbox" name="notPrime"></input>
          <label for="notPrime">Tomorrow by 1PM</label>
          <input type="checkbox" name="prime"></input>
          <label for="prime">All Prime</label>
        </div>
      </div>
      <div className="SR">
        {filtered.map((item) => {
          return (
            <div key={uuidv4()} className="SR">
              {item.title}
            </div>
          );
        })}
      </div>{' '}
    </main>
  );
}

export default SearchResults;
