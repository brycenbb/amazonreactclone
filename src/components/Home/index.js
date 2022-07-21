//Has hero that is 100% width and cards rows that are 90%
import Header from '../Header';
import Recs from '../Recommendations';
import Banner from '../Banner';
import { useContext } from 'react';
import { searchContext } from '../../contexts/contexts.js';
function Home() {
  const { searchTerm } = useContext(searchContext);

  return (
    <>
      <Header></Header>
      {/* <div id="greyBox"> */}
      {searchTerm !== '' ? (
        <div>Hi</div>
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
