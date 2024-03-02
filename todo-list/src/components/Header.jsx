import React from "react";

function Header() {
  function toggleTema() {
    const body = document.querySelector('.App');
    body.classList.toggle("vol2");
    if(body.classList.contains("vol2")) {
      localStorage.setItem('tema', 'vol2');
    } else {
      localStorage.setItem('tema', '');
    }
  }
  return (
    <header className="header">
      <h1 className="brand">TodoList</h1>
      <label className="switch">
        <input className="toggle" type="checkbox" onClick={toggleTema}/>
        <span className="slider"></span>
        <span className="cardSide"></span>
      </label>
    </header>
  );
}

export default Header;