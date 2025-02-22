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
  // const [scrollPos, setScrollPos] = useState(1200);

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
  const clickRef = useRef(null);

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
  const [currentLevel, setCurrentLevel] = useState(10);
  const [currentLink, setCurrentLink] = useState("/cpr");
  const [hiddenRef, setHiddenRef] = useState(true);
  const [mobileHiddenRef, setMobileHiddenRef] = useState(true);

  useEffect(() => {
    if (level) {
      level.value = currentLevel;
      if (currentLevel === 0) {
        setCurrentLink("/cpr/digital");
        startAnimation();
      } else if (currentLevel === 1) {
        setCurrentLink("/cpr/rx_link");
        startAnimation();
      }
      if (currentLevel === 2) {
        setCurrentLink("/cpr/engage");
        startAnimation();
      }
      if (currentLevel === 3) {
        setCurrentLink("/cpr/acquire");
        startAnimation();
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

        <div className="demo-buttons col-sm-12 col-md-6">
          <h2 className="clicktosee">
            Click to print a<br /> personalized receipt that:
          </h2>
          <button onClick={() => setCurrentLevel(3)}>
            Acquires New Loyalty App Users<span className="arrow"></span>
          </button>
          <button onClick={() => setCurrentLevel(1)}>
            Introduces A New Pharmacy Feature<span className="arrow"></span>
          </button>
          <button onClick={() => setCurrentLevel(2)}>
            Drives More Digital Engagement<span className="arrow"></span>
          </button>
          <button onClick={() => setCurrentLevel(0)}>
            Converts Non-Digital Members To Digital<span className="arrow"></span>
          </button>
          <div hidden={hiddenRef} className="click-ref">
            Viewing on mobile? <a href={`${currentLink}`}>Click here</a> to see where the receipt goes.
          </div>
        </div>
        <div ref={clickRef} className="rivecontainer col-sm-12 col-md-6">
          <img src="/assets/GreenHalfCircle.svg" className="riveCircle2" />
          <RiveComponent className="riveBox" />
          <div hidden={mobileHiddenRef} className="click-ref-mobile">
            Viewing on mobile? <a href={`${currentLink}`}>Click here</a> to see where the receipt goes.
          </div>
        </div>
      </div>
    </div>
  );
}
