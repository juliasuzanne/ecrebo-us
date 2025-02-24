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
              <p className="rx-cards">
                <img className="wrap-icon" src="/assets/rx_icon-02.svg" height="50px" />
                Place orders for prescriptions (for pickup or delivery)
              </p>
              <p className="rx-cards">
                <img className="wrap-icon" src="/assets/rx_icon-03.svg" height="50px" />
                Receive notifications when prescriptions are filled
              </p>
              <p className="rx-cards">
                <img className="wrap-icon" src="/assets/rx_icon-04.svg" height="50px" />
                Keep track of all your prescriptions and refills
              </p>
              <p className="rx-cards">
                <img className="wrap-icon" src="/assets/rx_icon-05.svg" height="50px" />
                Upload and update insurance info
              </p>
              <p className="rx-cards">
                <img className="wrap-icon" src="/assets/rx_icon-08.svg" height="50px" />
                Safely and securely see all your prescription info in one place.
                {/* : <br></br> Dosages, Medication
                guidelines, and Interaction warnings */}
              </p>
              <p className="rx-cards">
                <img className="wrap-icon" src="/assets/rx_icon-07.svg" height="50px" />
                Even set reminders to take pills
              </p>
              <p className="rx-cards">
                <img className="wrap-icon" src="/assets/rx_icon-06.svg" height="50px" />
                And, enjoy <img className="listmmlogo" src="/assets/mmlogorewards-2x.svg" />{" "}
                <img className="listmmlogo" src="/assets/mmlogorewards-rxlink.svg" />
              </p>
            </div>
          </ul>
          <button className="rxactivate">Activate Now</button>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
