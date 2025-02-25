import {
  useRive,
  EventType,
  RiveEventType,
  useStateMachineInput,
  Fit,
  Layout,
  Alignment,
} from "@rive-app/react-canvas";
import { useEffect, useState, useRef } from "react";

import "/src/css/cpr.css";

export function RiveEvents() {
  const { rive, RiveComponent } = useRive({
    src: "ecrebocpr-CPR.riv",
    stateMachines: "State Machine 1",
    autoPlay: "false",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.TopCenter,
    }),
  });
  const scrollRef = useRef(null);

  const executeScroll = () => {
    if (
      document.querySelector(".riveBox").getBoundingClientRect.bottom >
      Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    ) {
      window.scrollTo(document.querySelector(".riveBox").getBoundingClientRect.bottom);
    }
  };

  const backToTopScroll = () =>
    document.querySelector(".riveContent").scrollIntoView({
      behavior: "smooth",
    });

  const startAnimation = () => {
    setHiddenRef(true);
    setMobileHiddenRef(true);
    document.querySelector(".riveContent").scrollIntoView({
      behavior: "smooth",
    });
    play();
  };

  // Wait until the rive object is instantiated before adding the Rive
  // event listener
  useEffect(() => {
    if (rive) {
      rive.play();
    }

    const onRiveEventReceived = (riveEvent) => {
      const eventData = riveEvent.data;

      if (eventData.type === RiveEventType.General) {
        console.log("Event name" + eventData.name);
        if (eventData.name == "EndAnimation") {
          if (window.innerWidth >= 986) {
            setHiddenRef(false);
          } else {
            setMobileHiddenRef(false);
            document.querySelector(".rivecontainer").scrollIntoView({
              behavior: "smooth",
            });
          }
          console.log("end animation");
          executeScroll();
        } else if (eventData.name == "Scroller") {
          console.log("receipt hit");
          backToTopScroll();
        }
      }
    };

    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive]);

  const level = useStateMachineInput(rive, "State Machine 1", "level");
  const [currentLevel, setCurrentLevel] = useState(10);
  const [currentLink, setCurrentLink] = useState("/cpr");
  const [hiddenRef, setHiddenRef] = useState(true);
  const [mobileHiddenRef, setMobileHiddenRef] = useState("true");
  const buttons = document.querySelectorAll("button.button-rive");

  function changeCurrentButton(index) {
    buttons.forEach((el) => el.classList.remove("active-button"));
    buttons[index].classList.add("active-button");
  }

  useEffect(() => {
    if (level) {
      level.value = currentLevel;
      if (currentLevel === 0) {
        setCurrentLink("/cpr/digital");
        startAnimation();
        changeCurrentButton(3);
      } else if (currentLevel === 1) {
        setCurrentLink("/cpr/rx_link");
        startAnimation();
        changeCurrentButton(1);
      }
      if (currentLevel === 2) {
        setCurrentLink("/cpr/engage");
        startAnimation();
        changeCurrentButton(2);
      }
      if (currentLevel === 3) {
        setCurrentLink("/cpr/acquire");
        startAnimation();
        changeCurrentButton(0);
      }
    }
  }, [currentLevel, level]);

  const startRive = () => {
    rive && rive.play();
  };

  return (
    <div className="riveContent container.fluid" id="cpr">
      <div ref={scrollRef}></div>
      <div className="row">
        {/* <div className="demo-buttons col-sm-12 col-md-1"></div> */}

        <div className="demo-buttons col-sm-12 col-md-6">
          <h2 className="clicktosee">
            Click to print a<br /> personalized receipt that:
          </h2>
          <button className="button-rive" onClick={() => setCurrentLevel(3)}>
            Acquires New Loyalty App Users<span className="arrow"></span>
          </button>
          <button className="button-rive" onClick={() => setCurrentLevel(1)}>
            Introduces A New Pharmacy Feature<span className="arrow"></span>
          </button>
          <button className="button-rive" onClick={() => setCurrentLevel(2)}>
            Drives More Digital Engagement<span className="arrow"></span>
          </button>
          <button className="button-rive" onClick={() => setCurrentLevel(0)}>
            Converts Non-Digital Members To Digital<span className="arrow"></span>
          </button>
          <div hidden={hiddenRef} className="click-ref">
            Scan or <a href={`${currentLink}`}>click here</a> to see where the QR code goes.
          </div>
        </div>
        <div className="rivecontainer col-sm-12 col-md-6">
          <img src="/assets/GreenHalfCircle.svg" className="riveCircle2" />
          <RiveComponent className="riveBox" />
          <div className={`click-ref-mobile ${mobileHiddenRef}`}>
            Scan or <a href={`${currentLink}`}>click here</a> to see where the QR code goes.
          </div>
        </div>
      </div>
    </div>
  );
}
