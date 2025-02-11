import {
  useRive,
  EventType,
  RiveEventType,
  useStateMachineInput,
  Fit,
  Layout,
  Alignment,
} from "@rive-app/react-canvas";
import { useCallback, useEffect, useState, useRef } from "react";

import "/src/css/cpr.css";

export function RiveEvents() {
  const [showExtendedDiv, setShowExtendedDiv] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("/cpr/acquire");

  // const [scrollPos, setScrollPos] = useState(1200);

  const { rive, RiveComponent } = useRive({
    src: "ecrebocpr-TRM.riv",
    stateMachines: "State Machine 1",
    autoPlay: "false",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.TopCenter,
    }),
  });
  const myRef = useRef(null);
  const scrollRef = useRef(null);

  const executeScroll = () => {
    if (
      document.querySelector(".riveBox").getBoundingClientRect.bottom >
      Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    ) {
      window.scrollTo(document.querySelector(".riveBox").getBoundingClientRect.bottom);
    }
  };

  const backToTopScroll = () => scrollRef.current.scrollIntoView({ behavior: "smooth" });

  const handleShowDiv = () => {
    setShowExtendedDiv(false);
  };

  const handleHideDiv = () => {
    setShowExtendedDiv(true);
  };

  const startAnimation = () => {
    handleHideDiv();
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
      const eventProperties = eventData.properties;

      if (eventData.type === RiveEventType.General) {
        console.log("Event name" + eventData.name);
        if (eventData.name == "EndAnimation") {
          console.log("end animation");
          executeScroll();
          handleShowDiv();
        } else if (eventData.name == "Scroller") {
          console.log("receipt hit");
          backToTopScroll();
        }

        // Added relevant metadata from the event
        // console.log("Rating", eventProperties);
        // console.log("Message", eventProperties);
      }
    };

    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive]);

  const level = useStateMachineInput(rive, "State Machine 1", "level");
  const width = useStateMachineInput(rive, "State Machine 1", "width");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentLevel, setCurrentLevel] = useState(10);

  useEffect(() => {
    if (level) {
      level.value = currentLevel;
      if (currentLevel === 0) {
        startAnimation();
        setCurrentUrl("/cpr/acquire");
      } else if (currentLevel === 1) {
        startAnimation();
        setCurrentUrl("/cpr/rx_link");
      }
      if (currentLevel === 2) {
        startAnimation();
        setCurrentUrl("/cpr/engage");
      }
      if (currentLevel === 3) {
        startAnimation();
        setCurrentUrl("/cpr/digital");
      }
    }
  }, [currentLevel, level]);

  const startRive = () => {
    rive && rive.play();
  };

  return (
    <div className="riveContent container.fluid">
      <div ref={scrollRef}></div>
      <div className="row">
        {/* <div className="demo-buttons col-sm-12 col-md-1"></div> */}

        <div className="rivecontainer col-sm-12 col-md-6">
          <div className="rive-flex">
            <RiveComponent className="riveBox" />
            <div hidden={showExtendedDiv}>
              <p className="clickhere">
                Scan the QR code or <a href={currentUrl}>click here</a> to see where it goes.
              </p>
            </div>
          </div>
        </div>
        <div className="demo-buttons col-sm-12 col-md-6">
          <h2 className="clicktosee">
            Click to print a<br /> personalized receipt that:
          </h2>
          <button onClick={() => setCurrentLevel(0)}>
            <span className="arrow"></span> Acquires New Loyalty App Users
          </button>
          <button onClick={() => setCurrentLevel(1)}>
            <span className="arrow"></span> Introduces A New Pharmacy Feature
          </button>
          <button onClick={() => setCurrentLevel(2)}>
            <span className="arrow"></span> Drives More Digital Engagement
          </button>
          <button onClick={() => setCurrentLevel(3)}>
            <span className="arrow"></span> Converts Non-Digital Members To Digital
          </button>
        </div>
        <div ref={myRef}></div>
      </div>
    </div>
  );
}
