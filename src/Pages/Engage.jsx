import "./Css/engage.css";
import { Footer } from "./Footer";
import React, { useState } from "react";
import { ItemContainer } from "./ItemContainer";
import { MMNavbar } from "./MMNavbar";
import { CPRHero } from "../Components/CPRHero";

function getDate() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

export function Engage() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div>
      <CPRHero></CPRHero>
      <div className="engageborder">
        <div id="engagecontainer">
          <div id="externalpagebackground">
            <p className="externalpagedescription">
              Simulates sending a declining/lapsed loyalty app user to a page loaded with personalized offers to
              emphasize the app’s money-saving benefits.
              <br></br>
              <br></br>
              <a className="externalpagedescriptionlink" href="/cpr">
                Back
              </a>
            </p>
          </div>
          <MMNavbar></MMNavbar>
          <div>
            <div className="mmengagetitle">
              <br></br>

              <div className="titlebox">
                <h1 className="col-sm-12 col-md-10 titlemmrewardstext">
                  Hi Sofia!<br></br>
                  <span className="titlemmrewardstext">Thank you for being an </span>
                  <br></br>
                  <img
                    className="titlemmrewardsimage"
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709865627/mmfontdarkgreen_nnrqnd.png"
                  />{" "}
                  <br></br>
                  <span className="titlemmrewardstext">Member</span>
                </h1>

                <p className="col-sm-12 col-md-10 engagedescription">
                  Below we’ve handpicked some amazing offers to help you save! Buy these items on an upcoming trip to
                  (or online order from) Modern Markets and enjoy
                  <img
                    className="subtitlemmrewardsimage"
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1710183079/2xmmlogorewards_qbtnh9.png"
                  ></img>
                  . <br></br>Your personalized offers expire on 7/31/24.
                </p>
              </div>

              <hr></hr>
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
          <button className="engagebrowsemore">Browse more great offers and manufacturer's coupons</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
