import { MainTitle } from "./Components/MainTitle";
import { ProductCard } from "./Components/ProductCard";
import { ObserverComponent } from "./ObserverComponent";
import "/src/css/product-card.css";
import { useState } from "react";

export function Products() {
  const [startAnim, setStartAnim] = useState(false);
  const [startAnim2, setStartAnim2] = useState(false);

  const startAnimating = () => {
    setStartAnim(true);
  };

  const startAnimating2 = () => {
    setStartAnim2(true);
  };

  return (
    <div className="white-background-product" id="products">
      <div className="product-container">
        <MainTitle header_color="white">
          Grow retail media <span style={{ textDecoration: "underline" }}>and</span>
          <br></br> super-charge promotional lift.
        </MainTitle>
        <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>

        <div className="grid-product">
          <ProductCard
            image_url="assets/CPR_image.jpg"
            button_url="/cpr"
            icon_url="assets/cpricon.svg"
            product_title="EcreboCPR™ "
            product_subtitle="Clickable Paper Receipts"
            product_description="Efficiently acquire and activate loyalty app users with targeted QR codes on millions of paper receipts."
          ></ProductCard>
          <ProductCard
            image_url="assets/Grocery_coupon_US-MMEdit.png"
            button_url="/trm"
            icon_url="assets/trmicon.svg"
            product_title="EcreboTRM™ "
            product_subtitle="Total Receipt Marketing"
            product_description="Cost-effectively reach every customer with personalized, high-response marketing on sharp-looking printed receipts."
          ></ProductCard>
        </div>
      </div>
      <ObserverComponent handleStartAnim={startAnimating2}></ObserverComponent>

      <img
        className={`${startAnim ? "green-cta-circle box-left-animate" : "green-cta-circle box-left"}`}
        src="/assets/circle-cta-green.svg"
      />
      <img
        className={`${startAnim2 ? "top-circle box-right-animate" : "top-circle box-right"}`}
        src="/assets/01-top.svg"
      />
    </div>
  );
}
