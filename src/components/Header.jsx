const Header = (props) => {
  return (
    <header>
      <div>
        <img src="/logo.png" alt="logo" className="logo" />
      </div>
      <div className="search-grp">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          className="search"
          placeholder="Search by name"
          onChange={props.searchHandler}
        />
      </div>
      <div>
        <button className="navBtn">Home</button>
        <button className="navBtn">About us</button>
      </div>
      <span className="material-symbols-outlined shopping_cart">
        shopping_cart
      </span>
    </header>
  );
};

export default Header;
