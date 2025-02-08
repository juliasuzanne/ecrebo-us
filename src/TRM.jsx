import { EmailForm } from "./EmailForm";
import { RiveEvents } from "./RiveEvents";
import { TRMPageDescription } from "./TRMPageDescription";
import { TRMHero } from "./Components/TRMHero";
import "/src/css/hero.css";

export function TRM() {
  return (
    <div className="product-page">
      <TRMHero />
      <RiveEvents></RiveEvents>
      {/* <div className="container.fluid" id="circlebackground">
        <div className="row">
          <div className="description col-sm-12 col-md-12 col-lg-6">
            <TRMPageDescription></TRMPageDescription>
          </div>
          <div className="description col-sm-12 col-md-12  col-lg-6">
            
          </div>
        </div>
      </div> */}
      <EmailForm></EmailForm>
    </div>
  );
}
