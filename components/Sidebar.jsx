/* eslint-disable no-unused-vars */

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
// import { bubble as Menu } from "react-burger-menu";
// import { elastic as Menu } from "react-burger-menu";

function Sidebar() {
  return (
    <div className="SideBar">
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/News">
          News
        </a>
        <a className="menu-item" href="/Ebook">
          Ebook
        </a>
        <a className="menu-item" href="/Markets">
          Markets
        </a>
        <a className="menu-item" href="/Blogs">
          Blogs
        </a>
        <a className="menu-item" href="/Portfolio">
          Portfolio
        </a>
        <a className="menu-item" href="/ContactUs">
          Contact-Us
        </a>
        <a className="menu-item" href="/AboutUs">
          About-Us
        </a>
        <a className="menu-item" href="/Login">
          Login
        </a>
      </Menu>
    </div>
  );
}

export default Sidebar;
