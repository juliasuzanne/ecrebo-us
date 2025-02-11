import "/src/css/hero.css";
import { NavbarDemos } from "../NavbarDemos";

export function TRMHero(props) {
  return (
    <div>
      <NavbarDemos></NavbarDemos>
      <div className="container.fluid hero-home-cpr bg-trm">
        <div className="row">
          <div className="hero-content col-lg-6 col-md-12">
            <h3 className="cpr-title">
              Introducing EcreboTRM <br></br>
              <span className="green_span">Total Receipt Marketing™</span>
            </h3>
            <p className="descriptiontext cpr-text">
              Ecrebo makes delivering personalized, high-impact offers and messages on printed receipts easy. No POS
              integration and no new hardware required.
            </p>
            <p className="descriptiontext cpr-text">
              Receipt marketing boosts the effectiveness of store offers by 15% or more and creates new retail media.
              Plus, your receipts look great: clean and organized with compelling graphics.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 hero-img-trm"></div>
          <div className="hero-content-purple">
            {" "}
            <img className="purple-background-circle" src="/assets/Purple-Circle_Product.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
