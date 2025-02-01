import React from "react";
import "./comp_css_file/Banner.css"



const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <img
          src="cvr logo.png"
          alt="CVR Logo"
          className="banner-logo"
        />
        <div className="banner-text">
          <h1>CVR COLLEGE OF ENGINEERING</h1>
          <h3 >In pursuit of excellence</h3>
          <p>(An Autonomous Institution, Accredited by NBA, AICTE)</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
