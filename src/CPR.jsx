import { EmailForm } from "./EmailForm";
import { RiveEvents } from "./RiveEvents";
import { CPRPageDescription } from "./CPRPageDescription";
import { CPRHero } from "./Components/CPRHero";
import { NavbarDemos } from "./NavbarDemos";
import "/src/css/hero.css";

export function CPR() {
  return (
    <div className="product-page">
      <CPRHero />
      <div className="container.fluid" id="circlebackground">
        <div className="description">
          <CPRPageDescription></CPRPageDescription>
        </div>
        <div>
          <RiveEvents></RiveEvents>
        </div>
      </div>
      <EmailForm></EmailForm>
    </div>
  );
}
