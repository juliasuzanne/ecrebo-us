import "./Css/appstoremimic.css";
import "./Css/acquire.css";
import "./Css/appstoremimic.css";
import { AppStoreMimic } from "./AppStoreMimic";
import { NavbarExternalCPR } from "../NavbarExternalCPR";

export function Acquire() {
  return (
    <div className="appstoreborder">
      <NavbarExternalCPR></NavbarExternalCPR>
      <div className="appstorecontainer">
        <div id="externalpagebackground">
          <p className="externalpagedescription">
            Simulates sending a potentially new loyalty club member to the retailer’s App Store page to join the loyalty
            program.
            <br></br>
            <br></br>
            <a className="externalpagedescriptionlink" href="/cpr">
              <button>Back</button>
            </a>
          </p>
          <AppStoreMimic></AppStoreMimic>
        </div>
      </div>
    </div>
  );
}
