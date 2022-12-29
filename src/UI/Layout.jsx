import React from "react";
import Nav from "./Nav";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <header className="header">
        <div>Do Something Great</div>
        <Nav />
      </header>
      <div className="box">{props.children}</div>
    </div>
  );
};

export default Layout;
