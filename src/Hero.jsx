import "./css/hero.css";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container hero-home">
        <div className="hero-img"></div>

        <div className="hero-content"></div>
        <h3>
          Turn humble paper receipts into <span className="green_span">powerful marketing</span>.
        </h3>
      </div>
      <br></br>

      <br></br>
    </div>
  );
}
