import React from "react";
import "./Header.css";

const Header = ({ user, goBack }) => {
  const { name, status } = user;
  return (
    <header className="Header">
      <span onClick={goBack} className="Header__back-arrow">&larr;</span>
      <div>
        <h1 className="Header__name"> {name} </h1>
        <p className="Header__status"> {status} </p>
      </div>
    </header>
  );
};

export default Header;
