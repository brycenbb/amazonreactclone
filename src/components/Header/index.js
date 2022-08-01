import options from './menuList';
import TemporaryDrawer from '../Drawer';
import './index.css';
import { useContext } from 'react';
import { searchContext } from '../../contexts/contexts.js';
import { cartContext } from '../../contexts/contexts.js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {
  console.log('header refresh');
  const { cart } = useContext(cartContext);
  const { searchTerm } = useContext(searchContext);
  const { setSearchTerm } = useContext(searchContext);
  // console.log('page reloaded, search value', searchTerm);
  let history = useNavigate();
  //make a context and put the search info into it. Then, read that in Home to determine whether to render
  //banner and recs or to render the search screen instead ('' vs not '' )
  function handleSubmission(e) {
    // console.log(document.getElementById('searchBar').value);
    // search.setSearchTerm;
    e.preventDefault();
    if (!document.getElementById('searchBar').value) {
      // console.log('nothing typed in search bar, aborting');
      return false;
    }
    history('/search');
    // console.log(
    //   'updating search term',
    //   document.getElementById('searchBar').value
    // );
    setSearchTerm(document.getElementById('searchBar').value);
  }

  function resetSearch() {
    setSearchTerm('');
    document.getElementById('searchBar').value = '';
  }
  // console.log('hi', searchTerm);
  return (
    <header>
      <a
        href="#recs"
        id="skipBtn"
        className="optionBox"
        alt="skip to main content here"
      >
        Skip Navigation
      </a>
      <nav className="headerTop">
        {/* <a
          href="#navLogo"
          className="navLeft logoStuff"
          id="navLogo"
          onClick={reloadPage}
        > */}
        <Link
          to="/"
          href="#navLogo"
          className="navLeft logoStuff"
          id="navLogo"
          onClick={resetSearch}
        >
          <span className="amazonLogoMain"></span>
          <span className="nav-local">.co.uk</span>
        </Link>
        <a href="#recs" className="navLeft logoStuff">
          <div id="locationImg"></div>
          <div>
            <div id="hello">Hello</div>
            <div id="select">Select your address</div>
          </div>
        </a>
        <div id="searchContainer">
          <select id="searchDropdownBox" defaultValue={'all'}>
            <option value="all"> All Departments</option>
            <option value="amazon-devices">Amazon Devices</option>
            <option value="beauty">Beauty</option>
            <option value="car">Car</option>
            <option value="clothing">Clothing</option>
            <option value="grocery">Grocery</option>
            <option value="luggage">Luggage</option>
          </select>
          <form onSubmit={handleSubmission}>
            <input type="text" id="searchBar" defaultValue={searchTerm}></input>
            <input
              type="submit"
              id="searchIcon"
              value="Go"
              onClick={handleSubmission}
            ></input>
          </form>
        </div>
        <a href="#recs" id="currencyFlag">
          <span id="flag"></span>
          <span id="arrow"></span>
        </a>
        <a href="#recs" className="navRight">
          <div className="signInBox">
            <div>Hello, Sign in</div>
            <div>
              Account &amp; Lists
              <span id="arrow"></span>
            </div>
          </div>
        </a>
        <a href="#recs" className="navRight">
          <div className="returnBox">
            <div>Returns</div>
            <div>&amp; Orders</div>
          </div>
        </a>
        <Link to="/cart" className="navRight">
          <div className="basketBox">
            <div id="basketCount">{cart.length}</div>
            <div>Basket</div>
          </div>
        </Link>
      </nav>
      <nav id="mainMenu">
        <a href="#recs" className="optionBox" id="allIconBox">
          <TemporaryDrawer />
        </a>
        {options.map((item, index) => {
          return (
            <a key={index} href="#recs" className="optionBox">
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
