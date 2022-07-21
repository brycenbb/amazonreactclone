import options from './menuList';
import TemporaryDrawer from '../Drawer';
import './index.css';

function Header() {
  //make a context and put the search info into it. Then, read that in Home to determine whether to render
  //banner and recs or to render the search screen instead ('' vs not '' )
  function handleSubmission() {
    console.log(document.getElementById('searchBar').value);
  }
  return (
    <header>
      <a href="#" id="skipBtn" className="optionBox">
        Skip Navigation
      </a>
      <nav className="headerTop">
        <a href="#" className="navLeft logoStuff">
          <span className="amazonLogoMain"></span>
          <span className="nav-local">.co.uk</span>
        </a>
        <a href="#" className="navLeft logoStuff">
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
        <a href="#" id="currencyFlag">
          <span id="flag"></span>
          <span id="arrow"></span>
        </a>
        <a href="#" className="navRight">
          <div className="signInBox">
            <div>Hello, Sign in</div>
            <div>
              Account &amp; Lists
              <span id="arrow"></span>
            </div>
          </div>
        </a>
        <a href="#" className="navRight">
          <div className="returnBox">
            <div>Returns</div>
            <div>&amp; Orders</div>
          </div>
        </a>
        <a href="#" className="navRight">
          <div className="basketBox">
            <div id="basketCount">0</div>
            <div>Basket</div>
          </div>
        </a>
      </nav>
      <nav id="mainMenu">
        <a href="#" className="optionBox" id="allIconBox">
          <TemporaryDrawer />
        </a>
        {options.map((item, index) => {
          return (
            <a key={index} href="#" className="optionBox">
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
