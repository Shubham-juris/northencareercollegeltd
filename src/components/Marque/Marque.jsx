import React from 'react';
import './Marque.css'; 

function Marquee() {
  const text = (
    <>
      <span className="marquee-text">Unit</span>
      <span className="marquee-text">of</span>
      <span className="marquee-text">YK</span>
      <span className="marquee-text">Career</span>
      <span className="marquee-text">College</span>
    </>
  );

  return (
    <div className="marquee-wrapper">
      <div className="marquee-inner">
        {text}
        {text}
        {text}
        {text} 
      </div>
    </div>
  );
}

export default Marquee;
