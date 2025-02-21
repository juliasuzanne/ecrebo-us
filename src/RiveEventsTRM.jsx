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

export function RiveEventsTRM() {
  // const [scrollPos, setScrollPos] = useState(1200);

  const { rive, RiveComponent } = useRive({
    src: "ecrebocpr-TRM.riv",
    stateMachines: "State Machine 1",
    autoPlay: "false",
    layout: new Layout({
      fit: Fit.FitContent,
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

  useEffect(() => {
    if (level) {
      level.value = currentLevel;
      if (currentLevel === 0) {
        startAnimation();
      } else if (currentLevel === 1) {
        startAnimation();
      }
      if (currentLevel === 2) {
        startAnimation();
      }
      if (currentLevel === 3) {
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
      <div className="row rive-row">
        {/* <div className="demo-buttons col-sm-12 col-md-1"></div> */}

        <div className="demo-buttons col-sm-12 col-md-6">
          <h2 className="clicktosee">
            Click to print a<br /> personalized receipt that:
          </h2>
          <button onClick={() => setCurrentLevel(3)}>
            Delivers A Store Offer To A Valuable Customer <span className="arrow"></span>
          </button>

          <button onClick={() => setCurrentLevel(0)}>
            Delivers A Targeted Manufacturer’s Coupon <span className="arrow"></span>
          </button>
          <button onClick={() => setCurrentLevel(2)}>
            Promotes A Holiday Special<span className="arrow"></span>
          </button>
          <button onClick={() => setCurrentLevel(1)}>
            Promotes A Charity Event<span className="arrow"></span>
          </button>
        </div>
        <div className="rivecontainer col-sm-12 col-md-6">
          <img src="/assets/GreenHalfCircle.svg" className="riveCircle" />
          <RiveComponent className="riveBox" />
        </div>
      </div>
    </div>
  );
}
