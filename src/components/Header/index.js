function Header() {
  return (
    <header>
      <nav className="headerTop">
        <div className="tempbox"></div>
        <div className="tempbox"></div>
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
        <div className="tempbox"></div>
        <div className="tempbox"></div>
        <div className="tempbox"></div>
      </nav>
      <navbar></navbar>
    </header>
  );
}

export default Header;
