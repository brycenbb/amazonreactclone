import options from './menuList';
import TemporaryDrawer from '../Drawer';
import './index.css';

function Header() {
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
        <a href="#" className="navLeft">
          Deliver To
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
          <input type="submit" id="searchIcon" value="Go"></input>
        </div>
        <a href="#" id="currencyFlag">
          <span id="flag"></span>
        </a>
        <a href="#" className="navRight"></a>
        <a href="#" className="navRight"></a>
        <a href="#" className="navRight"></a>
      </nav>
      <nav id="mainMenu">
        <a href="#" className="optionBox" id="allIconBox">
          <div id="allIcon"></div>
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
