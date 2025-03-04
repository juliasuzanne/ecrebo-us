import "/src/css/hero.css";
import { NavbarDemos } from "../NavbarDemos";
import { ObserverComponent } from "../ObserverComponent";
import { useState } from "react";

export function CPRHero() {
  const [startAnim, setStartAnim] = useState(false);
  const [startAnim2, setStartAnim2] = useState(false);

  const startAnimating = () => {
    setStartAnim(true);
  };

  const startAnimating2 = () => {
    setStartAnim2(true);
  };

  return (
    <div>
      <NavbarDemos></NavbarDemos>
      <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>
      <div className="container.fluid hero-home-cpr">
        <img
          className={`${startAnim ? "trm-top-circle box-rotated-left-animate" : "trm-top-circle box-rotated-left"}`}
          src="/assets/01-top.svg"
        />
        <img
          className={`${startAnim2 ? "trm-top-cta box-right-animate" : "trm-top-cta box-right"}`}
          src="/assets/circle-cta.svg"
        />
        <img
          src="/assets/CPR_Hero.png"
          className="hero-img-cpr"
          alt="Image of a hand using smart phone to scan a QR code on a receipt"
        />
        <div className="hero-content">
          <h3 className="cpr-title">
            Introducing EcreboCPR <br></br>
            <span className="green_span">Clickable Paper Receipts™</span>
          </h3>
          <p className="descriptiontext cpr-text">
            Add personalized QR codes to your paper receipts to cost-effectively acquire and activate loyalty app users.
          </p>
          <ObserverComponent handleStartAnim={startAnimating2}></ObserverComponent>

          <p className="descriptiontext cpr-text">
            More customers using your app more often means more retail media to sell and better promotional performance.
            That’s money in the bank!
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
