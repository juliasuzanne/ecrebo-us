import { EmailForm } from "./EmailForm";
import { RiveEventsTRM } from "./RiveEventsTRM";
import { TRMPageDescription } from "./TRMPageDescription";
import { TRMHero } from "./Components/TRMHero";
import { NavbarDemos } from "./NavbarDemos";
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
        <EmailForm email_class="email-header"></EmailForm>
      </div>
    </div>
  );
}
