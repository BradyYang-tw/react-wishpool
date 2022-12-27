import React from "react";
import "./Nav.css";
import wishImg from "../static/wishImg.jpg";
import helpImg from "../static/helpImg.jpg";
import whoImg from "../static/who.jpg";
import voteImg from "../static/vote.jpg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const clickWish = () => {
    navigate("./wish");
  };
  const clickHelp = () => {
    navigate("./help");
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
      <div className="introduction">
        <img src={voteImg} alt="" />
        <button onClick={clickHelp}>我要投票</button>
      </div>
      <div className="votewish">
        <img src={whoImg} alt="" />
        <button onClick={clickHelp}>我們是誰</button>
      </div>
    </div>
  );
};

export default Nav;
