import { EmailForm } from "./EmailForm";
import { RiveEventsTRM } from "./RiveEventsTRM";
import { TRMPageDescription } from "./TRMPageDescription";
import { TRMHero } from "./Components/TRMHero";
import { Navbar } from "./Navbar";
import "/src/css/hero.css";

export function TRM() {
  return (
    <div className="product-page">
      <Navbar></Navbar>
      <TRMHero />
      <div className="container.fluid" id="circlebackground">
        <div className="row">
          <div className="description col-sm-12 col-md-12 col-lg-12">
            <TRMPageDescription></TRMPageDescription>
          </div>
          <div className="description col-sm-12 col-md-12  col-lg-12">
            <RiveEventsTRM></RiveEventsTRM>
          </div>
        </div>
      </div>
      <EmailForm></EmailForm>
    </div>
  );
}
