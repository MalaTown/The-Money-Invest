/* eslint-disable */
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon, duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="HeaderContainer fixed ">
      <div>
        <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />
      </div>
      <Link href="/" style={{ textDecoration: "none" }}>
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
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;
