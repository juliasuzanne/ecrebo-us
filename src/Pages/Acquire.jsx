import "./Css/appstoremimic.css";
import { Link } from "react-router-dom";
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
            <Link to="/cpr#cpr" className="externalpagedescriptionlink">
              <button className="externalpage-back">Back</button>
            </Link>
          </p>
          <AppStoreMimic></AppStoreMimic>
        </div>
      </div>
    </div>
  );
}
