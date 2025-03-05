import "./Css/mmnavbar.css";
import "../css/navbar.css";

export function MMNavbar() {
  return (
    <nav
      aria-label="imitation nav bar for demo only"
      className="mmnavbar mmnavbar-custom navbar navbar-expand-lg navbar-light"
    >
      <img className="navbar-logo" src="/assets/mmnavbar-logo.svg" height="40vw"></img>
      <div className="mmsearch-bar">
        <p>Search</p>
        <img className="mmsearch-icon" src="/assets/mag-icon.svg" />
      </div>
      <button className="mmnavbar-toggler">
        <span className="mmnavbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent2">
        <ul className="nav-fill mmnavbar-nav mr-auto">
          <li className="mmnav-item">
            <a className="mmnav-link">Find a store</a>
          </li>
          <li className="mmnav-item dropdown">
            <a className="mmnav-link">Login</a>
          </li>
          <li className="mmnav-item dropdown">
            <a className="mmnav-link">Help</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
