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
      <div className={isMobile ? "container " + showNav : "container"}>
        <a href="/dashboard" hidden={!isMobile} className="logo-mobile">
          <img src={Logo}></img>
        </a>
        <button hidden={!isMobile} className="collapse-btn">
          <img src={Collapse} className="collapse-icon" onClick={() => toggleNav()}></img>
        </button>
        <a href="/dashboard" hidden={isMobile}>
          <img src={Logo}></img>
        </a>
        <a href="#service-marker" className={isMobile ? "mobile" : ""}>
          Service
        </a>
        <a href="" className={isMobile ? "mobile" : ""}>
          About
        </a>
        <a href="" className={isMobile ? "mobile" : ""}>
          Portofolio
        </a>
        <a href="" className={isMobile ? "mobile" : ""}>
          Blog
        </a>
        <a href="" className={isMobile ? "mobile" : ""}>
          Career
        </a>
        <button className={isMobile ? "mobile" : ""}>Contact Us</button>
      </div>
    </header>
  );
};
