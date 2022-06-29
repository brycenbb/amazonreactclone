import options from './menuList';

function Header() {
  return (
    <header>
      <a href="#" id="skipBtn" className="optionBox">
        Skip Navigation
      </a>
      <nav className="headerTop">
        <a href="#" className="tempbox"></a>
        <a href="#" className="tempbox"></a>
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
