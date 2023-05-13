import { useState } from "react";
import Logo from "../assets/images/alba-logo.png";
import Collapse from "../assets/images/burger-menu-svgrepo-com.svg";
import "./styles/Navbar.css";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleNav = () => {
    setShowNav((prev) => {
      return !prev;
    });
  };

  const resizeResponse = () => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
      setShowNav(false);
    } else {
      setIsMobile(true);
    }
  };

  window.onresize = resizeResponse;
  return (
    <header>
      <div className="header-border">
        <div className="container">
          <div className="wrapper">
            <a href="." className="logo">
              <img src={Logo}></img>
            </a>
            <div className={isMobile ? "start " + "false" : "start"}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
              <button className="contact-btn">Contact Us</button>
            </div>
            <div className="btn-collapse">
              <button onClick={() => toggleNav()}>
                <img src={Collapse} />
              </button>
            </div>
          </div>
          <div className={isMobile ? "collapsible " + showNav : "collapsible"}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#about-anchor">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
