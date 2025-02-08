import {
  useRive,
  EventType,
  RiveEventType,
  useStateMachineInput,
  makeRenderer,
  Rive,
  onLoad,
  Fit,
  Layout,
  Alignment,
} from "@rive-app/react-canvas";
import { useCallback, useEffect, useState, useRef } from "react";
import "/src/index.css";
import { EmailForm } from "./EmailForm";

export function RiveEvents() {
  const [showExtendedDiv, setShowExtendedDiv] = useState(true);

  const [scrollPos, setScrollPos] = useState(1200);

  const { rive, RiveComponent } = useRive({
    src: "ecrebocpr3.riv",
    artboard: "Artboard",
    stateMachines: "State Machine 1",
    autoPlay: "true",
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.TopLeft,
    }),
  });
  const myRef = useRef(null);
  const scrollRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" });

  const backToTopScroll = () => scrollRef.current.scrollIntoView({ behavior: "smooth" });

  const handleShowDiv = () => {
    setShowExtendedDiv(false);
  };

  const scrollToPos = () => {
    const riveBox = document.querySelector(".riveBox");
    const rect = riveBox.getBoundingClientRect();
    console.log(rect);
    window.scrollTo(0, rect.bottom);
  };

  const handleHideDiv = () => {
    setShowExtendedDiv(true);
  };

  const onRiveEventReceived = (riveEvent) => {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;

    if (eventData.type === RiveEventType.General) {
      console.log("Event name" + eventData.name);

      if (eventData.name == "PlaySound") {
        play();
        handleShowDiv();
      } else if (eventData.name == "EndAnimation") {
        console.log("end animation");
        scrollToPos();
      } else if (eventData.name == "Scroller") {
        console.log("receipt hit");
        backToTopScroll();
      }

      // Added relevant metadata from the event
      // console.log("Rating", eventProperties);
      // console.log("Message", eventProperties);
    } else if (eventData.type === RiveEventType.OpenUrl) {
      console.log("Event name", eventData.name);
      // Handle OpenUrl event manually
      if (eventData.name == "GoToAcquire") {
        window.open("/cpr/acquire", "_self");
      } else if (eventData.name == "GoToRx") {
        window.open("/cpr/rx_link", "_self");
      } else if (eventData.name == "GoToEngage") {
        window.open("/cpr/engage", "_self");
      } else if (eventData.name == "GoToConversion") {
        window.open("/cpr/digital_conversion", "_self");
      }
    }
  };

  useEffect(() => {
    // Function to be executed on component load
    function onLoadFunction() {
      console.log("Component has loaded");
      rive && rive.play();
      // Add your desired logic here
    }

    onLoadFunction();

    // Optional: Return a cleanup function if needed
    return () => {
      // This function will be called when the component is unmounted
      console.log("Component is unmounting");
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Wait until the rive object is instantiated before adding the Rive
  // event listener
  useEffect(() => {
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
      console.log(level.value);
      console.log(currentLevel);
    }
  }, [currentLevel, level]);

  return (
    <div className="container.fluid" onMouseOver={() => rive && rive.play()}>
      <div ref={scrollRef}></div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <p className="clicktosee">
            Click to print a<br /> personalized receipt that:
          </p>
          <button onClick={() => setCurrentLevel(0)}>Level 1</button>
          <button onClick={() => setCurrentLevel(1)}>Level 2</button>
          <button onClick={() => setCurrentLevel(2)}>Level 3</button>
          <button onClick={() => setCurrentLevel(3)}>Level 4</button>
        </div>
        <div ref={myRef} className="rivecontainer col-sm-12 col-md-6">
          <RiveComponent className="riveBox" />
        </div>
        <div></div>
        <div id="test" hidden={showExtendedDiv}></div>
      </div>
    </div>
  );
}
