import "./Css/rx.css";
import { MMNavbar } from "./MMNavbar";
import { Footer } from "./Footer";
import { CPRHero } from "../Components/CPRHero";
import { NavbarExternalCPR } from "../NavbarExternalCPR";

export function Rx() {
  return (
    <div>
      <div className="rxborder">
        <NavbarExternalCPR></NavbarExternalCPR>

        <div id="externalpagebackground">
          <p className="externalpagedescription">
            Simulates sending a known pharmacy customer to a page in the retailer’s app explaining a new time and
            money-saving feature at the pharmacy.
            <br></br>
            <br></br>
            <a className="externalpagedescriptionlink" href="/cpr#cpr">
              <button>Back</button>
            </a>
          </p>
        </div>

        <div className="rxcontainer">
          <MMNavbar></MMNavbar>
          <div className="rxcontentcontainer">
            <div className="rxheaderbackground-mobile"></div>
            <div className="rxheadercontainer">
              <div className="rxheaderbackground"></div>
              <br></br>
              <div className="rxheader">
                <h1 className="rxtitle">
                  Introducing <br></br>
                  <img className="titlemmlogo" src="/assets/mmlogorewards.svg" />{" "}
                  <img className="titlemmlogo" src="/assets/mmlogorewards-rxlink.svg" />
                </h1>
                <p className="rxsubtitle">
                  We hear you. Ordering prescriptions can be a real hassle. And, re-filling them in-store, or over the
                  phone, is hard too. Our new <img className="subtitlemmlogo" src="/assets/mmlogorewards.svg" /> feature
                  makes everything pharmacy fast and easy.
                </p>
              </div>
            </div>
          </div>
          <ul className="rxmainlist">
            <p>
              Now you can use the <img className="subtitlemmlogo" src="/assets/mmlogorewards.svg" />{" "}
              <img className="subtitlemmlogo" src="/assets/mmlogorewards-rxlink.svg" /> app to:
            </p>
            <div className="listtextonly">
              <li>Place orders for prescriptions (for pickup or delivery)</li>
              <li> Receive notifications when prescriptions are filled</li>
              <li>Keep track of all your prescriptions and refills</li>
              <li> Upload and update insurance info</li>
              <li>
                Safely and securely see all your prescription info in one place: <br></br> Dosages, Medication
                guidelines, and Interaction warnings
              </li>
              <li> Even set reminders to take pills</li>
              <li>
                {" "}
                And, enjoy <img className="listmmlogo" src="/assets/mmlogorewards-2x.svg" />{" "}
                <img className="listmmlogo" src="/assets/mmlogorewards-rxlink.svg" />
              </li>
            </div>
          </ul>
          <button className="rxactivate">Activate Now</button>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
