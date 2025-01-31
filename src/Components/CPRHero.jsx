import "/src/css/hero.css";
import { ProductNavbar } from "../ProductNavbar";

export function CPRHero(props) {
  return (
    <div className="cpr-hero-div">
      <a href="/cpr">
        <img className="product-hero-img" src="/src/assets/ecrebo-logo-white.svg" />
      </a>
      <p className="hero_subtitle">CPR</p>
      <ProductNavbar nav_product="EcreboTRM" nav_url="/trm" />
    </div>
  );
}
