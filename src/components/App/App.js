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
  function addtoCart(name, price) {
    setCart((cart) => [...cart, { name, price }]);
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
