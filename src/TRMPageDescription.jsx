import { MainTitle } from "./Components/MainTitle";
import "/src/css/cpr.css";

export function TRMPageDescription() {
  return (
    <div className="ecrebo-product">
      {/* <MainTitle header_color="white">
        {" "}
        Introducing EcreboTRM <br />
        <span style={{ color: "var(--bright-green)" }}>
          Total Receipt Marketing<span id="tm">™</span>
        </span>{" "}
      </MainTitle> */}
      {/* <br></br> */}
      <p className="descriptiontext">
        Ecrebo makes delivering personalized, high-impact offers and messages on printed receipts easy. No POS
        integration and no new hardware required.
      </p>
      <p className="descriptiontext">
        Receipt marketing boosts the effectiveness of store offers by 15% or more and creates new retail media. Plus,
        your receipts look great: clean and organized with compelling graphics.
      </p>
    </div>
  );
}
