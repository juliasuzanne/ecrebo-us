import "./css/navbar.css";

export function NavMenu(props) {
  return (
    <div className="nav-menu-below" hidden={props.show}>
      <p>
        <a href="#products">Overview</a>
      </p>
      <p>
        <a href="/cpr">EcreboCPR</a>
      </p>
      <p>
        <a href="/trm">EcreboTRM</a>
      </p>
    </div>
  );
}
