import { useState, useRef, useEffect } from "react";
import "./css/ListAnimate.css";

export function ObserverComponent(props) {
  // const { ref: containerRef, inView: isVisible, entry } = useInView(options);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  const [name, setName] = useState(props.name);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (isVisible == true) {
      if (isActivated == false) {
        props.handleStartAnim();
        setIsActivated(true);
      }
    }
  };
  const options = {
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      // if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div className="">
      {/* <div className="isVisible">{isVisible ? `${name} is visible` : ""}</div> */}
      <span className={` ${isActivated ? props.afterAnim : props.beforeAnim}`}>
        <div ref={containerRef}>
          {props.textContent}
          {props.children}
        </div>
      </span>
    </div>
  );
}
