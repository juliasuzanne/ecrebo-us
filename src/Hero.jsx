import "./css/hero.css";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="container hero-home">
        <div className="hero-img"></div>
        <div className="hero-content"></div>
        <h3>Turn humble paper receipts into powerful marketing.</h3>
      </div>
      <br></br>

      <br></br>
    </div>
  );
}
