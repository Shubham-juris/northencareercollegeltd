import React from 'react';
import './Marque.css'; 

function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-inner">
        <div className="marquee-content marquee-left">
          <span className="marquee-text">Associated</span>
          <span className="marquee-text">By</span>
          <span className="marquee-text">YK</span>
          <span className="marquee-text">Career</span>
          <span className="marquee-text">College</span>
        </div>
        <div className="marquee-content marquee-right">
        <span className="marquee-text"> Associated</span>
          <span className="marquee-text">By</span>
          <span className="marquee-text">YK</span>
          <span className="marquee-text">Career</span>
          <span className="marquee-text">College</span>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
