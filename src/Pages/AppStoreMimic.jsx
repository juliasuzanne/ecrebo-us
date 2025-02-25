import "./Css/appstoremimic.css";
import { Footer } from "./Footer";

export function AppStoreMimic() {
  return (
    <div>
      <div id="appstorecontainer">
        <br></br>
        <div className="previewcontainer">
          {" "}
          <h5 className="appstoretitle">App Store&nbsp;</h5> <h5 className="appstorepreview"> Preview</h5>
        </div>
        <hr></hr>
        <div className="appstoreheadercontainer">
          <div className="bannercontainer">
            <p className="banner">This app is available on the App Store for iPhone and iPad.</p>
          </div>

          <div className="appstorepanel"></div>
          <hr className="appstorebannerhr"></hr>
          <div className="appstorebanner">
            <img className="appstoreinfo" src="/assets/appmimic-03_pfgbgy.png"></img>
          </div>

          <hr></hr>
          <div className="appstoredescription">
            Modern Markets all-in-one mRewards app makes shopping easier and more rewarding! Save with weekly deals and
            coupons. Earn and redeem valuable mRewards points. Plan meals. Create shopping lists. Schedule delivery or
            in-store pickup. Refill prescriptions. Join today to earn 1,000 bonus mRewards Points. That’s $10 in
            savings!
          </div>

          <hr></hr>
          <div>
            <h5 className="appstoretitle" id="mmtitle">
              Screenshots
            </h5>
            <div className="screenshotcontainer">
              <img className="screenshots" src="/assets/phonescreenshots_epihcj.webp" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
