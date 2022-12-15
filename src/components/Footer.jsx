import React from "react";
import "./Footer.css";
import fb from "../Icons/facebook.svg";
import instagram from "../Icons/instagram.svg";
import twitter from "../Icons/twitter.svg";
import youtube from "../Icons/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <a href="#">
        <img className="icon" src={fb} alt="" />
      </a>
      <a href="#">
        <img className="icon" src={instagram} alt="" />
      </a>
      <a href="#">
        <img className="icon" src={twitter} alt="" />
      </a>
      <a href="#">
        <img className="icon" src={youtube} alt="" />
      </a>
    </div>
  );
};

export default Footer;
