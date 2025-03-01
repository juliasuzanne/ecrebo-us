import { MainTitle } from "./Components/MainTitle";
import { ProductCard } from "./Components/ProductCard";
import "/src/css/product-card.css";

export function Products() {
  return (
    <div className="white-background-product" id="products">
      <div className="product-container">
        <MainTitle header_color="white">
          Grow retail media <span style={{ textDecoration: "underline" }}>and</span>
          <br></br> super-charge promotional lift.
        </MainTitle>
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
            image_url="assets/Grocery_coupon_US.png"
            button_url="/trm"
            icon_url="assets/trmicon.svg"
            product_title="EcreboTRM™ "
            product_subtitle="Total Receipt Marketing"
            product_description="Cost-effectively reach every customer with personalized, high-response marketing on sharp-looking printed receipts."
          ></ProductCard>
        </div>
      </div>
    </div>
  );
}
