import { Card } from "./Components/Card";
import { MainTitle } from "./Components/MainTitle";
import { ProductCard } from "./Components/ProductCard";
import { EmailForm } from "./EmailForm";
import { Products } from "./Products";
import { Hero } from "./Hero";
import "/src/css/grid.css";
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
              icon_color="dark-purple"
              card_color="purple"
              icon_url="assets/DataCard-1-1.svg"
              card_title="1/10th The Cost"
              card_description="Acquire & activate loyalty app user for 1/10th the usual cost."
            />
            <Card
              icon_color="dark-purple"
              card_color="purple"
              icon_url="assets/DataCard-1-2.svg"
              card_title="100% Reach"
              card_description="Reach 100% of shoppers with bespoke offers and messages."
            />
            <Card
              icon_color="dark-purple"
              card_color="purple"
              icon_url="assets/DataCard-1-3.svg"
              card_title="15% Lift"
              card_description="Boost redemption of your specials and offers by 15% or more."
            />
          </div>
        </div>
        <Products />
      </div>
      <div className="white-background">
        <MainTitle header_color="dark">Leading retailers use Ecrebo.</MainTitle>
        <Logos></Logos>
      </div>

      <div
        style={{ backgroundColor: "var(--dark-purple)", borderRadius: "var(--border-radius) var(--border-radius) 0 0" }}
      >
        {" "}
        <div className="light-to-dark-home">
          {/* <div className="gradient-background2"> */}
          <MainTitle extra_class="round-div" header_color="white">
            Ecrebo's software-only solution is <span className="green_span">pain-free.</span>
          </MainTitle>
          {/* </div> */}
          <div className="container-grid">
            <Card
              icon_color="green"
              card_color="light"
              icon_url="assets/DataCard-2-1.svg"
              card_title="POS Agnostic"
              card_description="Works with all POS systems and all receipt printers. No new hardware. Works with all POS systems and all receipt printers. No new hardware."
            />
            <Card
              icon_color="green"
              card_color="light"
              icon_url="assets/DataCard-2-2.svg"
              card_title="Simple Installation"
              card_description="No POS integration required. Time from testing to install can be weeks."
            />
            <Card
              icon_color="green"
              card_color="light"
              icon_url="assets/DataCard-2-3.svg"
              card_title="Easy Management"
              card_description="Campaign creation and management through an intuitive Ecrebo portal."
            />
          </div>

          <EmailForm></EmailForm>
        </div>
      </div>
    </div>
  );
}
