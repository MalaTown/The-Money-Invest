/* eslint-disable */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";

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
        <Link
          className={`NavItems ${activeItem === "home" ? "active" : ""}`}
          href="/"
          id="home"
          onClick={handleClick}
        >
          Home
        </Link>
        <Link
          className={`NavItems ${activeItem === "news" ? "active" : ""}`}
          href="/News"
          id="news"
          onClick={handleClick}
        >
          News
        </Link>
        <Link
          className={`NavItems ${activeItem === "blogs" ? "active" : ""}`}
          href="/Blogs"
          id="blogs"
          onClick={handleClick}
        >
          Blogs
        </Link>
        <Link
          className={`NavItems ${activeItem === "quiz" ? "active" : ""}`}
          href="/Quiz"
          id="quiz"
          onClick={handleClick}
        >
          Quiz
        </Link>
        <Link
          className={`NavItems ${activeItem === "Articles" ? "active" : ""}`}
          href="/Articles"
          id="Articles"
          onClick={handleClick}
        >
          Articles
        </Link>
        <Link
          className={`NavItems ${activeItem === "Affiliate" ? "active" : ""}`}
          href="/Affiliate"
          id="Affiliate"
          onClick={handleClick}
        >
          Affiliate
        </Link>
        <Link
          className={`NavItems ${
            activeItem === "contactus" ? "active" : ""
          }`}
          href="/ContactUs"
          id="contactus"
          onClick={handleClick}
        >
          Contact-Us
        </Link>
        <div className="dropdown">
          <Link
            className={`NavItems Ext ${
              activeItem === "aboutus" ? "active" : ""
            }`}
            href="/AboutUs"
            id="aboutus"
            onClick={handleClick}
          >
            About-Us
          </Link>
          <div className="dropdown-content">
            <Link href="/PrivacyPolicy">Privacy Policy</Link>
            <Link href="/TermAndConditions">Term & Conditions</Link>
            <Link href="/Disclaimer">Disclaimer</Link>
          </div>
        </div>

      </div>
    </Navbar>
  );
}

export default Navbarmenu;
