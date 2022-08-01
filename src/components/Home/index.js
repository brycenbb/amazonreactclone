//Has hero that is 100% width and cards rows that are 90%
import Header from '../Header';
import Recs from '../Recommendations';
import SearchResults from '../SearchResults';
import Banner from '../Banner';
import { useContext } from 'react';
import { searchContext } from '../../contexts/contexts.js';
function Home() {
  const { searchTerm } = useContext(searchContext);
  //advice from jordan: look into using useReducer so that the code is cleaner with context. Will mimic redux
  return (
    <>
      <Header></Header>
      {/* <div id="greyBox"> */}
      {searchTerm !== '' ? (
        <SearchResults></SearchResults>
      ) : (
        <>
          <Banner></Banner>
          <Recs></Recs>
        </>
      )}

      {/* </div> */}
    </>
  );
}

export default Home;
