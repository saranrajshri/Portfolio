import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        Shri<span className="header__logoBold">SaranRaj</span>
      </div>
      <div className="header__menu">
        <div className="header__menuList">
          <a>Home</a>
          <a>Projects</a>
          <a>Achievements</a>
          <a>Blog</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
