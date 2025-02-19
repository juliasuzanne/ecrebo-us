import "./Css/appstoremimic.css";
import "./Css/acquire.css";
import "./Css/appstoremimic.css";
import { AppStoreMimic } from "./AppStoreMimic";
import { NavbarExternalCPR } from "../NavbarExternalCPR";

export function Digital() {
  return (
    <div className="appstoreborder">
      <NavbarExternalCPR></NavbarExternalCPR>
      <div className="appstorecontainer">
        <div id="externalpagebackground">
          <p className="externalpagedescription">
            Simulates sending existing loyalty club members who have not downloaded the app to the retailer’s App Store
            page to install the app.
            <br></br>
            <br></br>
            <a className="externalpagedescriptionlink" href="/cpr">
              Back
            </a>
          </p>
          <AppStoreMimic></AppStoreMimic>
        </div>
      </div>
    </div>
  );
}
