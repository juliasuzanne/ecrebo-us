import { EmailForm } from "./EmailForm";
import { RiveEvents } from "./RiveEvents";
import { CPRPageDescription } from "./CPRPageDescription";
import { CPRHero } from "./Components/CPRHero";
import "/src/css/hero.css";

export function CPR() {
  return (
    <div className="product-page">
      <CPRHero />
      <div className="container.fluid" id="circlebackground">
        <div className="row">
          <div className="description col-sm-12 col-md-12 col-lg-12">
            <CPRPageDescription></CPRPageDescription>
          </div>
          <div className="description col-sm-12 col-md-12 col-lg-12">
            <RiveEvents></RiveEvents>
          </div>
        </div>
      </div>
      <EmailForm></EmailForm>
    </div>
  );
}
