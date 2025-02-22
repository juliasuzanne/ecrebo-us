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
              icon_color="purple"
              card_color="purple"
              icon_url="assets/DataCard-1-1.svg"
              card_pretitle="1/10th&nbsp;"
              card_title="the Cost"
              card_description="Acquire & activate loyalty app user for 1/10th the usual cost."
            ></Card>
            <Card
              icon_color="purple"
              card_color="purple"
              icon_url="assets/DataCard-1-2.svg"
              card_pretitle="100%&nbsp;"
              card_title="Reach"
              card_description="Reach 100% of shoppers with bespoke offers and messages."
            ></Card>
            <Card
              icon_color="purple"
              card_color="purple"
              icon_url="assets/DataCard-1-3.svg"
              card_pretitle="15%&nbsp;"
              card_title="Lift"
              card_description="Boost redemption of your specials and offers by 15% or more."
            ></Card>
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
          <div className="container-grid">
            <Card
              icon_color="purple"
              card_color="light"
              card_title="POS Agnostic"
              icon_url="assets/DataCard-2-3.svg"
              card_description="Works with all POS systems and all receipt printers. No new hardware."
            />
            <Card
              icon_color="purple"
              card_color="light"
              icon_url="assets/DataCard-2-2.svg"
              card_title="Simple Installation"
              card_description="No POS integration required. Time from testing to install can be weeks."
            />
            <Card
              icon_color="purple"
              card_color="light"
              icon_url="assets/DataCard-2-1.svg"
              card_title="Easy Management"
              card_description="Campaign creation and management through an intuitive Ecrebo portal."
            />
          </div>

          <EmailForm header_color="white" email_class="home_email"></EmailForm>
        </div>
      </div>
    </div>
  );
}
