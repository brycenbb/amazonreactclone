import './App.css';
import '../../assests/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Basket from '../Basket';
import SearchResults from '../SearchResults';
import Header from '../Header';
import {
  searchContext,
  cartContext,
  laterContext,
} from '../../contexts/contexts.js';
import { useState } from 'react';
import Checkout from '../Checkout';
import ProductPage from '../ProductPage';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [laterItems, setLaterItems] = useState([]);
  //need to change to include count!
  console.log('app refresh');
  function addToLater(item) {
    setLaterItems([...laterItems, item]);
  }
  function removeFromLater(item) {
    for (let i = 0; i < laterItems.length; i++) {
      if (item.product_id === laterItems[i].product_id) {
        addtoCart(item);
        setLaterItems([...laterItems.slice(0, i), ...laterItems.slice(i + 1)]);
      }
    }
  }
  function deleteFromLater(item) {
    for (let i = 0; i < laterItems.length; i++) {
      if (item.product_id === laterItems[i].product_id) {
        setLaterItems([...laterItems.slice(0, i), ...laterItems.slice(i + 1)]);
      }
    }
  }
  function addtoCart(item, count) {
    if (cart.length === 0) {
      setCart([{ ...item, count: count }]);
      return;
    }
    for (let i = 0; i < cart.length; i++) {
      console.log(item, cart[i].product_id, item.product_id);

      if (cart[i].product_id === item.product_id) {
        let temp = cart;
        temp[i].count += count;
        console.log('cart', cart);
        console.log(temp, cart, item, cart[i].product_id, item.product_id);
        setCart([...temp]);
        return;
      }
    }
    setCart([...cart, { ...item, count: count }]);
  }
  function updateQuantity(item, quantity) {
    let temp = cart;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].product_id === item.product_id) {
        temp[i].count = quantity;
        if (temp[i].count === 0) {
          console.log('new cart:', [...temp.slice(0, i), ...temp.slice(i + 1)]);
          setCart([...temp.slice(0, i), ...temp.slice(i + 1)]);
          return;
        }
        setCart([...temp, {}]);
        return;
      }
    }
  }
  return (
    <laterContext.Provider
      value={{ laterItems, addToLater, deleteFromLater, removeFromLater }}
    >
      <searchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <cartContext.Provider value={{ cart, addtoCart, updateQuantity }}>
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
              <Route
                path="/search/:product_id"
                element={
                  <>
                    <Header></Header>
                    <ProductPage />
                  </>
                }
              ></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
            </Routes>
          </Router>
        </cartContext.Provider>
      </searchContext.Provider>
    </laterContext.Provider>
  );
}

export default App;
