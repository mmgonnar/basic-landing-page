import React from "react";

const Header = () => {
  return (
    <section className="header">
      <div className="header__content">
        {/* <img
          src="https://picsum.photos/150/50"
          alt=""
          className="header__logo"
        /> */}
        <h1 className="header__logo">Header Logo</h1>
        <div className="header__container">
          <ul>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
