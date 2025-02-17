import { EmailForm } from "./EmailForm";
import { RiveEvents } from "./RiveEvents";
import { CPRPageDescription } from "./CPRPageDescription";
import { CPRHero } from "./Components/CPRHero";
import { NavbarDemos } from "./NavbarDemos";
import "/src/css/hero.css";

export function CPR() {
  return (
    <div className="light-to-dark-product">
      <div className="product-page">
        <CPRHero />
        <div className="container.fluid" id="circlebackground">
          <CPRPageDescription></CPRPageDescription>
          <div>
            <RiveEvents></RiveEvents>
          </div>
        </div>
        <EmailForm></EmailForm>
      </div>
    </div>
  );
}
