import options from './menuList';
import TemporaryDrawer from '../Drawer';
function Header() {
  return (
    <header>
      <a href="#" id="skipBtn" className="optionBox">
        Skip Navigation
      </a>
      <nav className="headerTop">
        <a href="#" className="tempbox logoStuff">
          <span className="amazonLogoMain"></span>
          <span className="nav-local">.co.uk</span>
        </a>
        <a href="#" className="tempbox">
          Deliver To
        </a>
        {/* <div id="searchContainer"> */}
        <select id="searchDropdownBox">
          <option selected value="all">
            All Departments
          </option>
          <option value="amazon-devices">Amazon Devices</option>
          <option value="beauty">Beauty</option>
          <option value="car">Car</option>
          <option value="clothing">Clothing</option>
          <option value="grocery">Grocery</option>
          <option value="luggage">Luggage</option>
        </select>

        <input type="text" id="searchBar"></input>
        {/* </div> */}
        <a href="#" className="tempbox"></a>
        <a href="#" className="tempbox"></a>
        <a href="#" className="tempbox"></a>
      </nav>
      <navbar id="mainMenu">
        <a href="#" className="optionBox">
          <TemporaryDrawer />
        </a>
        {options.map((item) => {
          return (
            <a href="#" className="optionBox">
              {item}
            </a>
          );
        })}
      </navbar>
    </header>
  );
}

export default Header;
