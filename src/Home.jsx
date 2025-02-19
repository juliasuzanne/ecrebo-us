import { Card } from "./Components/Card";
import { MainTitle } from "./Components/MainTitle";
import { ProductCard } from "./Components/ProductCard";
import { EmailForm } from "./EmailForm";
import { Products } from "./Products";
import { Hero } from "./Hero";
import "/src/css/grid.css";
import { Card2 } from "./Components/Card2";
import { Card3 } from "./Components/Card3";

import { Logos } from "./Logos";
import { RiveEvents } from "./RiveEvents";

export function Home() {
  return (
    <div style={{ backgroundColor: "var(--white)" }}>
      <div>
        <Hero />
        <div className="personalized-receipts" style={{ backgroundColor: "var(--white)" }}>
          <MainTitle header_color="dark">
            Personalized paper receipts are <span className="purple_span">powerful.</span>
          </MainTitle>
          <div className="container-grid">
            <Card
              icon_color="green"
              card_color="purple"
              icon_url="assets/DataCard-1-1.svg"
              card_pretitle="1/10th the"
              card_title="Cost"
              card_description="Acquire & activate loyalty app user for 1/10th the usual cost."
            >
              <div className="green-cols">
                <div className="green-col-1"></div>
                <div className="green-col-2"></div>
              </div>
            </Card>
            <Card
              icon_color="red"
              card_color="purple"
              icon_url="assets/DataCard-1-2.svg"
              card_pretitle="100%"
              card_title="Reach"
              card_description="Reach 100% of shoppers with bespoke offers and messages."
            >
              <div className="red-cols">
                <img className="reach-img" src="assets/Reach.svg" />
                <p>100%</p>
              </div>
            </Card>
            <Card
              icon_color="purple"
              card_color="purple"
              icon_url="assets/DataCard-1-3.svg"
              card_pretitle="15%"
              card_title="Lift"
              card_description="Boost redemption of your specials and offers by 15% or more."
            >
              <div className="purple-cols">
                <div className="purple-col-1"></div>
                <div className="purple-col-2"></div>
              </div>
            </Card>
          </div>
        </div>
        <Products />
      </div>
      <div className="white-background">
        <MainTitle header_color="dark">Leading retailers use Ecrebo.</MainTitle>
        <Logos></Logos>
      </div>

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
          <div className="container-grid-2">
            <Card2
              icon_color="green"
              card_color="light"
              card_title="POS Agnostic"
              image_url="assets/POS-image.png"
              card_description="Works with all POS systems and all receipt printers. No new hardware."
            />
            <Card3
              icon_color="green"
              card_color="light"
              image_url="assets/mgmt-image.png"
              card_title="Easy Management"
              card_description="Campaign creation and management through an intuitive Ecrebo portal."
            />
            <Card2
              icon_color="green"
              card_color="light"
              image_url="assets/install-img.png"
              card_title="Simple Installation"
              card_description="No POS integration required. Time from testing to install can be weeks."
            />
          </div>

          <EmailForm email_class="home_email"></EmailForm>
        </div>
      </div>
    </div>
  );
}
