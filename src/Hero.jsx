import "./css/hero.css";
import { useState } from "react";
import { ObserverComponent } from "./ObserverComponent";

export function Hero() {
  const [startAnim, setStartAnim] = useState(false);

  const startAnimating = () => {
    setStartAnim(true);
  };
  return (
    <div className="hero-main">
      <div className="container hero-home">
        <img
          width="375px"
          height="450px"
          src="/assets/hero-v3.png"
          className="hero-img"
          alt="Image of three receipts showcasing sharp graphics, examples for customers Albertsons, Total Wine & More, and Loblaws"
        />

        <h1>
          Turn humble paper receipts into <span className="green_span">powerful marketing</span>.
        </h1>
      </div>
      <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>

      <div className="hero-transparent">
        <img
          className={`${startAnim ? "purple-circle box-top-animate" : "purple-circle box-top"}`}
          src="/assets/Purple-Stripe-Arc_Home.svg"
          alt="Decorative geometric element"
        />
      </div>
    </div>
  );
}
