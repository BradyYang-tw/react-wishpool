import React from "react";
import "./Nav.css";
import wishImg from "../static/wishImg.jpg";
import helpImg from "../static/helpImg.jpg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const native = useNavigate();
  const clickWish = () => {
    native("./wish");
  };
  const clickHelp = () => {
    native("./help");
  };
  return (
    <div className="nav">
      <div className="wish">
        <img src={wishImg} alt="" />
        <button onClick={clickWish}>我要許願</button>
      </div>
      <div className="help">
        <img src={helpImg} alt="" />
        <button onClick={clickHelp}>我要幫忙</button>
      </div>
    </div>
  );
};

export default Nav;
