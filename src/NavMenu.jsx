import "./css/navbar.css";

export function NavMenu(props) {
  return (
    <div
      className="nav-menu-below"
      hidden={props.show}
      onMouseLeave={() => {
        if (window.innerWidth > 968) {
          props.closeMenu();
        }
      }}
    >
      <a href="#products">
        <p>Overview</p>
      </a>
      <a href="/cpr">
        <p>EcreboCPR</p>
      </a>
      <a href="/trm">
        <p>EcreboTRM</p>
      </a>
    </div>
  );
}
