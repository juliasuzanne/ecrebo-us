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
    src: "ecrebocpr3.riv",
    stateMachines: "State Machine 1",
    autoPlay: "false",
    layout: new Layout({
      fit: Fit.FitHeight,
      alignment: Alignment.TopCenter,
    }),
  });
  const myRef = useRef(null);
  const scrollRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" });

  const backToTopScroll = () => scrollRef.current.scrollIntoView({ behavior: "smooth" });

  const handleShowDiv = () => {
    setShowExtendedDiv(false);
  };

  const handleHideDiv = () => {
    setShowExtendedDiv(true);
  };

  const startAnimation = () => {
    document.querySelector(".clicktosee").scrollIntoView({
      behavior: "smooth",
    });
    play();
    handleShowDiv();
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
      startAnimation();
      level.value = currentLevel;
      if (currentLevel === 0) {
        setCurrentUrl("/cpr/acquire");
      } else if (currentLevel === 1) {
        setCurrentUrl("/cpr/rx_link");
      }
      if (currentLevel === 2) {
        setCurrentUrl("/cpr/engage");
      }
      if (currentLevel === 3) {
        setCurrentUrl("/cpr/digital");
      }
    }
  }, [currentLevel, level]);

  const startRive = () => {
    rive && rive.play();
  };

  return (
    <div className="container.fluid">
      <div ref={scrollRef}></div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <p className="clicktosee">
            Click to print a<br /> personalized receipt that:
          </p>
          <button
            onClick={() => {
              setCurrentLevel(0);
            }}
          >
            Level 1
          </button>
          <button
            onClick={() => {
              setCurrentLevel(1);
            }}
          >
            Level 2
          </button>
          <button
            onClick={() => {
              setCurrentLevel(2);
            }}
          >
            Level 3
          </button>
          <button
            onClick={() => {
              setCurrentLevel(3);
            }}
          >
            Level 4
          </button>
          <div hidden={showExtendedDiv}>
            <p className="clickhere">
              Scan the QR code or <a href={currentUrl}>click here</a> to see where it goes.
            </p>
          </div>
        </div>
        <div className="rivecontainer col-sm-12 col-md-6">
          <RiveComponent className="riveBox" />
        </div>
        <div ref={myRef}></div>
      </div>
    </div>
  );
}
