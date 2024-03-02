import React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="brand">TodoList</h1>
      <label className="switch">
        <input className="toggle" type="checkbox" />
        <span className="slider"></span>
        <span className="cardSide"></span>
      </label>
    </header>
  );
}

export default Header;