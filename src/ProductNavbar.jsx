import "../src/css/navbar.css";

export function ProductNavbar(props) {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href={props.nav_url}>{props.nav_product}</a>
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
