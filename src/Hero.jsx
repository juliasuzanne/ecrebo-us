import "./css/hero.css";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <div className="hero-main">
      <Navbar></Navbar>
      <div className="container hero-home">
        <h3>
          Turn humble paper receipts into <span className="green_span">powerful marketing</span>.
        </h3>
        <div className="hero-img"></div>
      </div>
      <div className="hero-transparent">
        <img className="purple-circle" src="/assets/Purple-Stripe-Arc_Home.svg" />
      </div>
    </div>
  );
}
