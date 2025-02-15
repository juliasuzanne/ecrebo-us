// import "../src/css/navbar.css";
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
    // <div className="navbar-expand{-sm|-md|-lg|-xl}" role="navigation">
    //   <ul className="main-nav">
    //     <a href="#products">
    //       <li
    //         onMouseEnter={() => {
    //           if (window.innerWidth > 968) {
    //             setShowNavMenu(false);
    //           }
    //         }}
    //       >
    //         Products <img className="nav-arrow" src="/assets/Down_Arrow_Menu.svg" />
    //       </li>
    //     </a>
    //     <NavMenu show={showNavMenu} closeMenu={closeNavMenu} />
    //     <li>
    //       <a href="#contact-us">
    //         <button>Contact Us</button>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
    <nav className="navbar navbar-expand-md navbar-light">
      <img onClick={() => window.location("/")} className="navbar-logo" src="/assets/ecrebo-logo-white.svg" />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav-fill navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Solutions
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/cpr">
                EcreboCPR
              </a>
              <a className="dropdown-item" href="/trm">
                EcreboTRM
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-us ">
              <button>Contact Us</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
