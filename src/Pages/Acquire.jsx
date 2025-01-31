import "./Css/appstoremimic.css";
import "./Css/acquire.css";
import "./Css/appstoremimic.css";
import { AppStoreMimic } from "./AppStoreMimic";
import { CPRHero } from "../Components/CPRHero";

export function Acquire() {
  return (
    <div className="appstoreborder">
      <CPRHero></CPRHero>
      <div id="appstorecontainer">
        <div id="externalpagebackground">
          <p className="externalpagedescription">
            Simulates sending a potentially new loyalty club member to the retailer’s App Store page to join the loyalty
            program.
          </p>
          <br></br>
          <a className="externalpagedescriptionlink" href="/">
            Return to home page
          </a>
          <br></br>
          <br></br>
          <AppStoreMimic></AppStoreMimic>
        </div>
      </div>
    </div>
  );
}
