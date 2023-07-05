/* eslint-disable */
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="HeaderContainer fixed z-50">
      <div>
        <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />
      </div>
        <div
          className="headerBox">
          <img
            className="logo"
            src="/images/TMI-Logo.png"
            height="100"
            width="100"
            alt="company-logo"
          />
            <h1 className="headingText"> The Money Invest </h1>

        </div>
      <Navbar />
    </div>
  );
}

export default Header;
