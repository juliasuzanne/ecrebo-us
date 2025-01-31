import { MainTitle } from "./Components/MainTitle";
import "/src/css/cpr.css";

export function CPRPageDescription() {
  return (
    <div className="ecrebo-product">
      <MainTitle header_color="white">
        {" "}
        Introducing EcreboCPR <br />
        <span style={{ color: "var(--bright-green)" }}>
          Clickable Paper Receipts<span id="tm">™</span>
        </span>{" "}
      </MainTitle>
      <br></br>
      <p className="descriptiontext">
        Add personalized QR codes to your paper receipts to cost-effectively acquire and activate loyalty app users.
      </p>
      <p className="descriptiontext">
        More users, using your app more often, means more retail media to sell and better promotional performance.
        That’s money in the bank.
      </p>
    </div>
  );
}
