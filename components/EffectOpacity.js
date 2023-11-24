import React, { useEffect, useRef, useState } from "react";

const EffectOpacity = ({ children }) => {
  const [opacity, setOpacity] = useState(1);
  const headerRef = useRef();

  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const range = 500;
    const offset = headerHeight / 1.8;

    const didScrollPage = (e) => {
      let calc = 1 - (window.scrollY - offset + range) / range;

      if (calc > 1) {
        calc = 1;
      }
      if (calc < 0) {
        calc = 0;
      }
      if (window.scrollY === 0) {
        calc = 1;
      }

      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    // return () => {
    //   window.removeEventListener("keydown", didScrollPage);
    // };
  }, []);

  return (
    <div ref={headerRef} style={{ opacity: opacity }}>
      {children}
    </div>
  );
};

export default EffectOpacity;
