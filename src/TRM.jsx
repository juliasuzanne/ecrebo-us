import { EmailForm } from "./EmailForm";
import { RiveEventsTRM } from "./RiveEventsTRM";
import { TRMPageDescription } from "./TRMPageDescription";
import { TRMHero } from "./Components/TRMHero";
import { NavbarDemos } from "./NavbarDemos";
import "/src/css/hero.css";

export function TRM() {
  return (
    <div className="product-page">
      <TRMHero />
      <div className="container.fluid" id="circlebackground">
        <div className="row">
          <div className="description col-sm-12 col-md-12  col-lg-12">
            <RiveEventsTRM></RiveEventsTRM>
          </div>
        </div>
      </div>
      <EmailForm></EmailForm>
    </div>
  );
}
