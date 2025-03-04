import "./css/p2pi.css";
import { MainTitle } from "./Components/MainTitle";

export function P2PIBadge() {
  return (
    <div className="p2pi-container" id="p2pi">
      <div className="p2pi-image">
        <a href="https://events.p2pi.com/retailmediasummit2025/681603" target="_blank">
          <img src="/assets/P2PIBadge.png" alt="P2PI Badge for Retail Media Summit event in 2025" />
        </a>
      </div>
      <div className="p2pi-content">
        <h2>Be sure to see our case study with Loblaw at the Retail Media Summit in May.</h2>
        <a href="https://events.p2pi.com/retailmediasummit2025/programoverview" target="_blank">
          <div className="p2pi-event">
            <div className="p2pi-event-date">
              May<span className="p2pi-event-space">&nbsp;</span>
              <br className="p2pi-event-br"></br>8
            </div>
            <div className="p2pi-event-title">
              <p className="p2pi-event-title-title">How Loblaw is Rethinking Loyalty and Engagement</p>
              <p>
                <img className="p2pi-map-icon" alt="Icon of map symbol" src="/assets/map-icon.svg" />
                Rosemont, IL
              </p>
              <p>
                <img className="p2pi-map-icon" alt="Icon of clock" src="/assets/clock-icon.svg" />
                9:40-10:10 AM US CST
              </p>
            </div>
          </div>
        </a>
      </div>
      {/* <div className="p2pi-description">
        <p>
          As personalized, data-driven marketing redefines retail success, Loblaw is leaning into new and innovative
          ways to drive loyalty and engagement. This session will explore how Canada's largest retailer is integrating
          personalized QR codes on paper receipts not only to improve the efficiency of acquiring new loyalty app users
          but also to boost promotional performance with targeted messaging.
        </p>
      </div> */}
    </div>
  );
}
