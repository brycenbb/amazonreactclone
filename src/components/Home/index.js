//Has hero that is 100% width and cards rows that are 90%
import Header from '../Header';
import Recs from '../Recommendations';
import Banner from '../Banner';
function Home() {
  return (
    <>
      <Header></Header>
      {/* <div id="greyBox"> */}
      <Banner></Banner>
      <Recs></Recs>
      {/* </div> */}
    </>
  );
}

export default Home;
