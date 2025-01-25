import { MainTitle } from "./Components/MainTitle";
import { ProductCard } from "./Components/ProductCard";
import "/src/css/product-card.css";

export function Products() {
  return (
    <div className="gradient-background">
      <div className="product-container">
        <MainTitle header_color="dark">
          Grow retail media <span style={{ textDecoration: "underline" }}>and</span> super-charge promotional lift.
        </MainTitle>
        <div className="grid-product">
          <ProductCard
            image_url="src/assets/CPR_image.png"
            button_url="/cpr"
            product_title="EcreboCPR™ "
            product_subtitle="Clickable Paper Receipts"
            product_description="Grow your retail media business. Efficiently acquire and activate loyalty app users by adding customized QR codes to paper receipts."
          ></ProductCard>
          <ProductCard
            image_url="src/assets/Grocery_coupon_US.png"
            button_url="/trm"
            product_title="EcreboTRM™ "
            product_subtitle="Total Receipt Marketing"
            product_description="Cost-effectively reach every customer with personalized, high-response marketing on sharp-looking printed receipts."
          ></ProductCard>
        </div>
      </div>
    </div>
  );
}
