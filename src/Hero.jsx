import "./css/hero.css";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <div className="hero-main">
      <Navbar></Navbar>
      <div className="container hero-home">
        <img width="375px" height="450px" src="/assets/Hero-img.png" className="hero-img" />

        <h1>
          Turn humble paper receipts into <span className="green_span">powerful marketing</span>.
        </h1>
      </div>
      <div className="hero-transparent">
        <img className="purple-circle" src="/assets/Purple-Stripe-Arc_Home.svg" />
      </div>
    </div>
  );
}
