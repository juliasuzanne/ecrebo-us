import { MainTitle } from "./Components/MainTitle";
import "/src/css/cpr.css";

export function CPRPageDescription() {
  return (
    <div className="description container ecrebo-product">
      <MainTitle header_color="white">
        {" "}
        Introducing EcreboCPR{" "}
        <span style={{ color: "var(--bright-green)" }}>
          Clickable Paper Receipts<span id="tm">™</span>
        </span>{" "}
      </MainTitle>
      <br></br>
      <p className="descriptiontext">
        Instantly turn humble paper receipts into powerful digital marketing by adding personalized QR codes.
      </p>
      <p className="descriptiontext">
        Ecrebo’s Clickable Paper Receipt (CPR) solution is the most cost-effective way for retailers to drive more
        digital engagement.{" "}
      </p>
      <p className="descriptiontext">No new equipment or POS integration required.</p>
    </div>
  );
}
