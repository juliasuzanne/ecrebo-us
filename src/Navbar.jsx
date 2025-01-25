import "../src/css/navbar.css";

export function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a>Demos</a> <img src="/src/assets/Down_Arrow_Menu.svg" />
        </li>
        <li>
          <a href="#contact-us">
            <button>Contact Us</button>
          </a>
        </li>
      </ul>
    </div>
  );
}
