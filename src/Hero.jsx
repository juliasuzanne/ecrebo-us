import "./css/hero.css";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="container hero-home">
        <div className="hero-content">
          <img className="hero-img" src="assets/ecrebo-logo-white.svg" />
          <h3>Turn humble paper receipts into powerful marketing.</h3>
        </div>
      </div>
    </div>
  );
}
