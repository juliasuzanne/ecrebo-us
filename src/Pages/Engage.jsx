import "./Css/engage.css";
import { Footer } from "./Footer";
import { useState } from "react";
import { ItemContainer } from "./ItemContainer";
import { MMNavbar } from "./MMNavbar";
import { NavbarExternalCPR } from "../NavbarExternalCPR";
import "./Css/rx.css";

function getDate() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

export function Engage() {
  return (
    <div>
      <div className="engageborder">
        <NavbarExternalCPR></NavbarExternalCPR>
        <div id="externalpagebackground">
          <p className="externalpagedescription">
            Simulates sending a declining/lapsed loyalty app user to a page loaded with personalized offers to emphasize
            the app’s money-saving benefits.
            <br></br>
            <br></br>
            <a className="externalpagedescriptionlink" href="/cpr#cpr">
              <button className="externalpage-back">Back</button>
            </a>
          </p>
        </div>
        <div id="engagecontainer" className="rxcontainer">
          <MMNavbar></MMNavbar>
          <div className="rxcontentcontainer">
            <div className="engagebackground-mobile"></div>

            <div className="rxheadercontainer">
              <div className="engagebackground"></div>

              <br></br>

              <div className="rxheader">
                <h1 className="rxtitle">
                  Thank you for being an <img className="titlemmlogo" src="/assets/mmlogorewards.svg" />{" "}
                  <span className="titlemmlogo">Member</span>
                </h1>

                <p className="rxsubtitle engagedescription">
                  Below we’ve handpicked some amazing offers to help you save! Buy these items on an upcoming trip to
                  (or online order from) Modern Markets and enjoy{" "}
                  <img className="subtitlemmrewardsimage" src="/assets/mmlogorewards-2x.svg"></img>. <br></br>Your
                  personalized offers expire on 7/31/25.
                </p>
              </div>
            </div>
          </div>

          <br></br>
          <h1 className="personalizedheader">Your Personalized Offers</h1>
          <hr></hr>
          <div className="itemcontainer">
            <ItemContainer
              image="https://pics.walgreens.com/prodimg/398349/450.jpg"
              title="Nature Made Tumeric Curcumin 500 mg Capsules - 60 Count"
              newprice="14.99"
              oldprice="15.99"
              saving="1.00"
              points="30"
            ></ItemContainer>
            <ItemContainer
              image="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/5a060530f6f83e41a40deab5_59231337d8a00307702fc146-produce-packaged-vegetables-fruits-mandarins.jpg"
              title="Mandarins Clementine Prepacked Bag - 3 Lb"
              newprice="4.99"
              oldprice="5.99"
              saving="1.00"
              points="10"
            ></ItemContainer>
            <ItemContainer
              image="https://target.scene7.com/is/image/Target/GUEST_470dfa63-5b84-4d42-a460-e6c14961a930?wid=488&hei=488&fmt=pjpeg"
              title="Best Foods Real Mayonnaise - 48 Fl Oz"
              newprice="9.29"
              oldprice="10.99"
              saving="1.70"
              points="18"
            ></ItemContainer>
            <ItemContainer
              image="https://i5.walmartimages.com/asr/0599901a-dded-4d9a-b89c-f48709b2cb73.a4dcc7e859912dc8ce6ba48ba0983d99.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
              title="Grey Poupon Dijon Mustard Squeeze Bottle - 10 Oz"
              newprice="4.99"
              oldprice="5.99"
              saving="1.00"
              points="10"
            ></ItemContainer>

            <ItemContainer
              image="https://contenthandler-raleys.fieldera.com/prod/302460/1/0/0/10546086-Main.jpg"
              title="Whole Rotisserie Chicken Hot (Available After 10AM)"
              newprice="8.99"
              oldprice="9.99"
              saving="1.00"
              points="18"
            ></ItemContainer>
          </div>
          <p className="engagebrowsemore">Browse more great offers and manufacturer's coupons &#8594;</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
