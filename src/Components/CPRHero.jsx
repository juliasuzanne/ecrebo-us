import "/src/css/hero.css";
import { NavbarDemos } from "../NavbarDemos";
import { Card } from "./Card";
export function CPRHero() {
  return (
    // <div className="cpr-hero-div">
    //   <a href="/cpr"></a>
    // </div>
    <div>
      <NavbarDemos></NavbarDemos>
      <div className="container.fluid hero-home-cpr">
        <img src="/assets/CPRimage2.png" className="hero-img-cpr" />
        <div className="hero-content">
          <h3 className="cpr-title">
            Introducing EcreboCPR <br></br>
            <span className="green_span">Clickable Paper Receipts™</span>
          </h3>
          <p className="descriptiontext cpr-text">
            Add personalized QR codes to your paper receipts to cost-effectively acquire and activate loyalty app users.
          </p>
          <p className="descriptiontext cpr-text">
            More users, using your app more often, means more retail media to sell and better promotional performance.
            That’s money in the bank.
          </p>
        </div>{" "}
        {/* <div className="hero-content-purple">
            {" "}
            <img className="purple-background-circle" src="/assets/Purple-Circle_Product.svg"></img>
          </div> */}
      </div>
    </div>
  );
}
