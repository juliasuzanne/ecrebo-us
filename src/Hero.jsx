import "./css/hero.css";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <div className="container hero-home">
      <img className="hero-img" src="src/assets/ecrebo-logo-white.svg" />
      <h3>Turn humble paper receipts into powerful marketing.</h3>
      <Navbar></Navbar>
    </div>
  );
}
