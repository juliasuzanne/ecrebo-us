import "/src/css/hero.css";
import { ProductNavbar } from "../ProductNavbar";

export function TRMHero(props) {
  return (
    <div className="trm-hero-div">
      <a href="/trm">
        <img className="product-hero-img" src="/assets/ecrebo-logo-white.svg" />
      </a>
      {/* <ProductNavbar nav_product="EcreboCPR" nav_url="/cpr" /> */}
    </div>
  );
}
