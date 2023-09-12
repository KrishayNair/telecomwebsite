import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo3.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to give  <br />
            best services to our clients.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">A32/A, The Old Shanti Niketan CHS,7 Bungalow Andheri West, Mumbai ,Capatain Harminder Singh Rd, Mumbai-400061, Maharastra
</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
