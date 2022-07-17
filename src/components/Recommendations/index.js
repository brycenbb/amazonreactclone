import cardList from './cardsData';
import ActionAreaCard from '../Card';
import Banner from '../Banner';
import './index.css';

function Recs() {
  return (
    <main id="recs">
      <section className="cardSection">
        {cardList.map((item, index) => {
          return (
            // <div key={index} className="card">
            //   <h3>{item.title}</h3>
            //   <img src={item.pics[0]} alt=""></img>
            //   <div className="seeMore"> See More </div>
            // </div>
            <ActionAreaCard
              key={index}
              title={item.title}
              picture={item.pics[0]}
            ></ActionAreaCard>
          );
        })}
      </section>
    </main>
  );
}

export default Recs;
