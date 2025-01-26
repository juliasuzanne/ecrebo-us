import { EmailForm } from "./EmailForm";
import { RiveEvents } from "./RiveEvents";
import { TRMPageDescription } from "./TRMPageDescription";
import { TRMHero } from "./Components/TRMHero";
import "/src/css/hero.css";

export function TRM() {
  return (
    <div className="product-page">
      <TRMHero></TRMHero>
      <div className="description container.fluid" id="circlebackground">
        <div className="row">
          <div className="description col-sm-12 col-md-12 col-lg-6">
            <TRMPageDescription></TRMPageDescription>
          </div>
          <div className="receiptanim col-sm-12 col-md-12  col-lg-6" id="ecrebocpr">
            <RiveEvents></RiveEvents>
          </div>
        </div>
      </div>
      <div className="email container.fluid">
        <div className="row">
          <div className="col-sm-12">
            <EmailForm></EmailForm>
          </div>
          <div className="col-sm-12"></div>
        </div>
      </div>
    </div>
  );
}
