import options from './menuList';
import TemporaryDrawer from '../Drawer';
import './index.css';
import { useContext } from 'react';
import { searchContext } from '../../contexts/contexts.js';
import { cartContext } from '../../contexts/contexts.js';
import { Link } from 'react-router-dom';
function Header() {
  const { cart } = useContext(cartContext);

  //make a context and put the search info into it. Then, read that in Home to determine whether to render
  //banner and recs or to render the search screen instead ('' vs not '' )
  function handleSubmission() {
    // console.log(document.getElementById('searchBar').value);
    // search.setSearchTerm;
    setSearchTerm(document.getElementById('searchBar').value);
  }
  const { setSearchTerm } = useContext(searchContext);

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
          {/* </a> */}
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

          <input type="text" id="searchBar"></input>
          <input
            type="submit"
            id="searchIcon"
            value="Go"
            onClick={handleSubmission}
          ></input>
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
        <a href="#recs" className="navRight">
          <div className="basketBox">
            <div id="basketCount">{cart.length}</div>
            <div>Basket</div>
          </div>
        </a>
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
