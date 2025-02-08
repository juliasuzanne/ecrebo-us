import "/src/css/hero.css";
import { ProductNavbar } from "../ProductNavbar";

export function CPRHero(props) {
  return (
    <div className="cpr-hero-div">
      <a href="/cpr">
        <img className="product-hero-img" src="/assets/ecrebo-logo-white.svg" />
      </a>
      {/* <ProductNavbar nav_product="EcreboTRM" nav_url="/trm" /> */}
    </div>
  );
}
