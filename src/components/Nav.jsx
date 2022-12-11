import React from "react";
import "./Nav.css";
import wishImg from "../static/wishImg.jpg";
import helpImg from "../static/helpImg.jpg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="wish">
        <p>我要許願</p>
        <img src={wishImg} alt="" />
      </div>
      <div className="help">
        <p>我要幫忙</p>
        <img src={helpImg} alt="" />
      </div>
    </div>
  );
};

export default Nav;
