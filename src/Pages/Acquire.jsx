import "./Css/appstoremimic.css";
import "./Css/acquire.css";
import "./Css/appstoremimic.css";
import { AppStoreMimic } from "./AppStoreMimic";
import { CPRHero } from "../Components/CPRHero";

export function Acquire() {
  return (
    <div className="appstoreborder">
      <CPRHero></CPRHero>
      <div className="appstorecontainer">
        <div id="externalpagebackground">
          <p className="externalpagedescription">
            Simulates sending a potentially new loyalty club member to the retailer’s App Store page to join the loyalty
            program.
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
