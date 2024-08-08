import React, { useRef } from 'react';
import { gsap } from 'gsap';
import "../components/styles/YinAnimation.css";

const YinAnimation = () => {
  const liquidRef = useRef(null);

  const normal = () => {
    gsap.to(liquidRef.current, { duration: 1, attr: { scale: 0 } });
  };

  const swirly = () => {
    gsap.to(liquidRef.current, { duration: 1, attr: { scale: 300 } });
  };

  return (
    <div className="yin-container">
      <img
        className='yin-image'
        id="image"
        style={{ filter: "url(#swirl)" }}
        src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Yin"
        onMouseOver={swirly}
        onMouseLeave={normal}
      />
      <svg>
        <filter id="swirl">
          <feTurbulence
            baseFrequency="0.010"
            numOctaves="2"
            result="wrap"
            type="fractalNoise"
          ></feTurbulence>
          <feDisplacementMap
            ref={liquidRef}
            id="liquid"
            in="SourceGraphic"
            in2="wrap"
            scale="300"
            xChannelSelector="R"
            yChannelSelector="B"
          ></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};

export default YinAnimation;