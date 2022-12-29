import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <ul className="layout-nav">
      <li className="layout-nav-li">
        <NavLink className="layout-nav-link" to="/react-wishpool/wish">
          我要許願
        </NavLink>
      </li>
      <li className="layout-nav-li">
        <NavLink className="layout-nav-link" to="/react-wishpool/help">
          我要幫忙
        </NavLink>
      </li>
      <li className="layout-nav-li">
        <NavLink className="layout-nav-link" to="/react-wishpool/votewish">
          我要投票
        </NavLink>
      </li>
      <li className="layout-nav-li">
        <NavLink className="layout-nav-link" to="/react-wishpool/introduction">
          我們是誰
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
