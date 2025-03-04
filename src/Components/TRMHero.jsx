import "/src/css/hero.css";
import { NavbarDemos } from "../NavbarDemos";
import { ObserverComponent } from "../ObserverComponent";
import { useState } from "react";

export function TRMHero(props) {
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
      <div className="container.fluid hero-home-cpr bg-trm">
        <img
          className={`${startAnim ? "trm-top-circle box-rotated-left-animate" : "trm-top-circle box-rotated-left"}`}
          src="/assets/01-top.svg"
        />
        <img
          className={`${startAnim2 ? "trm-top-cta box-right-animate" : "trm-top-cta box-right"}`}
          src="/assets/circle-cta.svg"
        />

        <img
          className="hero-img-trm"
          src="/assets/TRMHero.svg"
          alt="Image of receipt highlighting personalized, targeted graphic elements including QR code and offer logos"
        />

        <div className="hero-content">
          <h3 className="cpr-title">
            Introducing EcreboTRM <br></br>
            <span className="green_span">Total Receipt Marketing™</span>
          </h3>
          <p className="descriptiontext cpr-text">
            Ecrebo makes delivering personalized, high-impact offers and messages on printed receipts easy. No POS
            integration and no new hardware required.
          </p>
          <ObserverComponent handleStartAnim={startAnimating2}></ObserverComponent>

          <p className="descriptiontext cpr-text">
            Receipt marketing boosts the response to store offers by 15% or more and creates new retail media. Plus,
            your receipts look great: neatly organized and shorter with compelling graphics.
          </p>
        </div>
      </div>
      {/* <div className="hero-content-purple">
            {" "}
            <img className="purple-background-circle" src="/assets/Purple-Circle_Product.svg"></img>
          </div> */}
    </div>
  );
}

// <div className="container.fluid hero-home-cpr">
// <img src="/assets/CPRimage2.png" className="hero-img-cpr" />
// <div className="hero-content">
//   <h3 className="cpr-title">
//     Introducing EcreboCPR <br></br>
//     <span className="green_span">Clickable Paper Receipts™</span>
//   </h3>
//   <p className="descriptiontext cpr-text">
//     Add personalized QR codes to your paper receipts to cost-effectively acquire and activate loyalty app users.
//   </p>
//   <p className="descriptiontext cpr-text">
//     More users, using your app more often, means more retail media to sell and better promotional performance.
//     That’s money in the bank.
//   </p>
// </div>{" "}
// {/* <div className="hero-content-purple">
//     {" "}
//     <img className="purple-background-circle" src="/assets/Purple-Circle_Product.svg"></img>
//   </div> */}
// </div>
// </div>
