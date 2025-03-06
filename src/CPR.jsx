import { EmailForm } from "./EmailForm";
import { RiveEvents } from "./RiveEvents";
import { CPRHero } from "./Components/CPRHero";
import "/src/css/hero.css";

export function CPR() {
  return (
    <div className="light-to-dark-product">
      <div className="product-page">
        <CPRHero />
        <div className="container.fluid" id="circlebackground">
          <div>
            <RiveEvents></RiveEvents>
          </div>
        </div>
        <EmailForm header_color="white" email_class="email-home"></EmailForm>
      </div>
    </div>
  );
}
