import "../src/css/navbar.css";
import { useState } from "react";
import { NavMenu } from "./NavMenu";

export function Navbar() {
  const [showNavMenu, setShowNavMenu] = useState(true);

  const toggleShowNavMenu = () => {
    if (showNavMenu === false) {
      setShowNavMenu(true);
    } else {
      setShowNavMenu(false);
    }
  };

  const closeNavMenu = () => {
    if (window.innerWidth > 968) {
      setShowNavMenu(true);
    }
  };

  return (
    <div className="nav">
      <ul className="main-nav">
        <a href="#products">
          <li
            onMouseEnter={() => {
              if (window.innerWidth > 968) {
                setShowNavMenu(false);
              }
            }}
          >
            Products <img className="nav-arrow" src="/assets/Down_Arrow_Menu.svg" />
          </li>
        </a>
        <NavMenu show={showNavMenu} closeMenu={closeNavMenu} />
        <li>
          <a href="#contact-us">
            <button>Contact Us</button>
          </a>
        </li>
      </ul>
    </div>
  );
}
