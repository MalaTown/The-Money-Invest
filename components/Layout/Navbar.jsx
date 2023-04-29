/* eslint-disable */
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

function Navbarmenu() {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (e) => {
    setActiveItem(e.target.id);
    localStorage.setItem("activeNavItem", e.target.id);
  };

  useEffect(() => {
    const storedItem = localStorage.getItem("activeNavItem");
    if (storedItem) {
      setActiveItem(storedItem);
    }
  }, []);

  return (
    <Navbar className="NavMenu" expand="lg" variant="light">
      <div className="NavItemDiv">
        <a
          className={`NavItems ${activeItem === "home" ? "active" : ""}`}
          href="/"
          id="home"
          onClick={handleClick}
        >
          Home
        </a>
        <a
          className={`NavItems ${activeItem === "news" ? "active" : ""}`}
          href="/News"
          id="news"
          onClick={handleClick}
        >
          News
        </a>
        <a
          className={`NavItems ${activeItem === "ebook" ? "active" : ""}`}
          href="/Ebook"
          id="ebook"
          onClick={handleClick}
        >
          Ebook
        </a>
        <a
          className={`NavItems ${activeItem === "markets" ? "active" : ""}`}
          href="/Markets"
          id="markets"
          onClick={handleClick}
        >
          Markets
        </a>
        <a
          className={`NavItems ${activeItem === "blogs" ? "active" : ""}`}
          href="/Blogs"
          id="blogs"
          onClick={handleClick}
        >
          Blogs
        </a>
        <a
          className={`NavItems ${activeItem === "portfolio" ? "active" : ""}`}
          href="/Portfolio"
          id="portfolio"
          onClick={handleClick}
        >
          Portfolio
        </a>
        <div className="dropdown">
          <a
            className={`NavItems Ext ${
              activeItem === "aboutus" ? "active" : ""
            }`}
            href="/AboutUs"
            id="aboutus"
            onClick={handleClick}
          >
            About-Us
          </a>
          <div className="dropdown-content">
            <a href="/PrivacyPolicy">Privacy Policy</a>
            <a href="/TermAndConditions">Term & Conditions</a>
            <a href="/Disclaimer">Disclaimer</a>
          </div>
        </div>
        <a
          className={`NavItems Ext ${
            activeItem === "contactus" ? "active" : ""
          }`}
          href="/ContactUs"
          id="contactus"
          onClick={handleClick}
        >
          Contact-Us
        </a>
      </div>
      <div className="IconPack mr-5">
        <div className="container-2">
          <FontAwesomeIcon className="Icons icon" icon={faSearch} />
          <input type="search" id="search" placeholder="Search..." />
        </div>
        <FontAwesomeIcon className="Icon" icon={faBell} />
      </div>
    </Navbar>
  );
}

export default Navbarmenu;
