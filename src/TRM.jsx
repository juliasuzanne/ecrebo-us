import { EmailForm } from "./EmailForm";
import { RiveEventsTRM } from "./RiveEventsTRM";
import { TRMHero } from "./Components/TRMHero";
import "/src/css/hero.css";

export function TRM() {
  return (
    <div className="light-to-dark-product">
      <div className="product-page">
        <TRMHero />
        <div className="container.fluid" id="circlebackground">
          <div>
            <RiveEventsTRM></RiveEventsTRM>
          </div>
        </div>
        <EmailForm header_color="white" email_class="email-home"></EmailForm>
      </div>
    </div>
  );
}
