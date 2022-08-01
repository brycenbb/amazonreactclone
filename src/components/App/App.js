import './App.css';
import '../../assests/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Basket from '../Basket';
import SearchResults from '../SearchResults';
import Header from '../Header';
import { searchContext, cartContext } from '../../contexts/contexts.js';
import { useState } from 'react';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  //need to change to include count!
  console.log('app refresh');

  function addtoCart(item) {
    if (cart.length === 0) {
      setCart([{ ...item, count: 1 }]);
      return;
    }
    for (let i = 0; i < cart.length; i++) {
      console.log(item, cart[i].product_id, item.product_id);

      if (cart[i].product_id === item.product_id) {
        let temp = cart;
        temp[i].count++;
        console.log('cart', cart);
        console.log(temp, cart, item, cart[i].product_id, item.product_id);
        setCart(temp);
        return;
      }
    }
    setCart([...cart, { ...item, count: 1 }]);
  }
  return (
    <searchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <cartContext.Provider value={{ cart, addtoCart }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Basket />}></Route>
            <Route
              path="/search"
              element={
                <>
                  <Header></Header>
                  <SearchResults></SearchResults>
                </>
              }
            ></Route>
            {/* <Route path="/home" element={<Home />}></Route> */}
          </Routes>
        </Router>
      </cartContext.Provider>
    </searchContext.Provider>
  );
}

export default App;
