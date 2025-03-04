import React, { useState, useEffect } from "react";

export function Navbar() {
  const [scrolledUp, setScrolledUp] = useState("navbar-reg");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        currentScrollY < lastScrollY &&
        currentScrollY < document.documentElement.scrollHeight - window.innerHeight &&
        window.innerWidth > 986
      ) {
        setScrolledUp("navbar-sticky");
      } else {
        setScrolledUp("navbar-reg");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`${scrolledUp}`}>
      <nav className="navbar navbar-expand-md navbar-light">
        <img
          onClick={() => window.location.replace("/")}
          className="navbar-logo"
          src="/assets/ecrebo-logo-white.svg"
          alt="Ecrebo logo that acts as home page link"
        />
        <button
          onClick={() => setScrolledUp("navbar-sticky")}
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
              <a className="nav-link" href="#p2pi">
                P2PI
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
              <div className="dropdown-menu custom-menu" aria-labelledby="navbarDropdown">
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
    </div>
  );
}
