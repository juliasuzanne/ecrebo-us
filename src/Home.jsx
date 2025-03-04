import { Card } from "./Components/Card";
import { MainTitle } from "./Components/MainTitle";
import { EmailForm } from "./EmailForm";
import { Products } from "./Products";
import { Hero } from "./Hero";
import "/src/css/grid.css";
import { Logos } from "./Logos";
import { Navbar } from "./Navbar";
import { P2PIBadge } from "./P2PIBadge";
import { Link } from "react-router-dom";
import { ObserverComponent } from "./ObserverComponent";
import { useState } from "react";

export function Home() {
  const [startAnim, setStartAnim] = useState(false);
  const [startAnim2, setStartAnim2] = useState(false);

  const startAnimating = () => {
    setStartAnim(true);
  };

  const startAnimating2 = () => {
    setStartAnim2(true);
  };

  return (
    <div style={{ backgroundColor: "var(--white)" }}>
      <Navbar></Navbar>
      <div>
        <Hero />
        <div className="personalized-receipts" style={{ backgroundColor: "var(--white)" }}>
          <MainTitle header_color="dark">
            Personalized paper receipts are <span className="purple_span">powerful.</span>
          </MainTitle>
          <div className="container-grid">
            <Card
              icon_color="purple"
              icon_url="assets/DataCard-1-1.svg"
              card_pretitle="1/10th&nbsp;"
              card_title="the Cost"
              image_alt="Icon of money going back into the hand"
              card_description="Acquire & activate loyalty app user for 1/10th the usual cost."
            ></Card>
            <Card
              icon_color="purple"
              icon_url="assets/DataCard-1-2.svg"
              card_pretitle="100%&nbsp;"
              card_title="Reach"
              image_alt="Icon of crowd of people"
              card_description="Reach 100% of your shoppers with personalized offers and messages."
            ></Card>
            <Card
              icon_color="purple"
              icon_url="assets/DataCard-1-3.svg"
              card_pretitle="15%&nbsp;"
              card_title="Lift"
              image_alt="Icon of arrow pointing up indicating lift"
              card_description="Boost redemption of your specials and offers by 15% or more."
            ></Card>
          </div>
        </div>
        <Products />
      </div>
      <div className="white-background">
        <MainTitle header_color="dark">Leading retailers use Ecrebo.</MainTitle>
        <ObserverComponent handleStartAnim={startAnimating2}></ObserverComponent>

        <Logos></Logos>

        <img
          className={`${startAnim2 ? "bottom-circle box-right-animate" : "bottom-circle box-right"}`}
          src="/assets/01-bottom.svg"
        />
      </div>
      <P2PIBadge></P2PIBadge>
      <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>

      <div
        className="light-to-dark-container"
        style={{ backgroundColor: "var(--dark-purple)", borderRadius: "var(--border-radius) var(--border-radius) 0 0" }}
      >
        {" "}
        <div className="light-to-dark-home">
          {/* <div className="gradient-background2"> */}
          <MainTitle extra_class="round-div" header_color="dark">
            Ecrebo's software-only solution is <span className="purple_span">pain-free.</span>
          </MainTitle>
          {/* </div> */}
          <div className="container-grid">
            <Card
              icon_color="purple"
              card_color="light"
              card_title="POS Agnostic"
              additional_class="manual-title-wrap"
              image_alt="Icon of POS system"
              icon_url="assets/DataCard-2-3.svg"
              card_description="Works with all POS systems and all receipt printers. No new hardware."
            />
            <Card
              icon_color="purple"
              card_color="light"
              image_alt="Icon of simple integration"
              icon_url="assets/DataCard-2-2.svg"
              card_title="Simple Installation"
              card_description="No POS integration required. Time from testing to install can be weeks."
            />
            <Card
              icon_color="purple"
              card_color="light"
              image_alt="Icon of laptop"
              icon_url="assets/DataCard-2-1.svg"
              card_title="Easy Management"
              card_description="Campaign creation and management through an intuitive Ecrebo portal."
            />
          </div>
          <img
            className={`${startAnim ? "circle-circle box-left-animate" : "circle-circle box-left"}`}
            src="/assets/circle-cta.svg"
          />
          <EmailForm header_color="white" email_class="home_email"></EmailForm>
        </div>
      </div>
    </div>
  );
}
