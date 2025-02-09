// import "../src/css/navbar.css";
import { useState } from "react";
import { NavMenu } from "./NavMenu";

export function NavbarDemos() {
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
    <nav className="navbar navbar-expand-md navbar-light">
      <img onClick={() => window.location.replace("/")} className="navbar-logo" src="/assets/ecrebo-logo-white.svg" />
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
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
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
