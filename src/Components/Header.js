import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import "./Styles/Style.css";

const Header = ({ theme, setTheme }) => {
  const [click, setClick] = useState(false);
  const handleTheme = () => {
    if (!theme) {
      setTheme(true);
      document.body.classList.add("light");
    } else {
      setTheme(false);
      document.body.classList.remove("light");
    }
  };

  const handleClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  const handleResize = () => {
    if (window.innerWidth >= 950) {
      setClick(false);
    }
  };

  window.addEventListener("resize", handleResize);
  useEffect(() => {
    handleResize();
  }, [click]);

  return (
    <header id="home">
      <Logo />
      <nav className={click ? "active" : ""}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="theme--toggler" onClick={handleTheme}>
        <i className={theme ? "fas fa-moon" : "fas fa-sun"}></i>
      </div>
      <div className="menu--btn" onClick={handleClick}>
        <i className={`fas ${click ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </header>
  );
};

export default Header;
