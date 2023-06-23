/* eslint-disable */

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

function Sidebar() {
  return (
    <div className="SideBar">
      <Menu>
        <Link className="menu-item" href="/">
          Home
        </Link>
        <Link className="menu-item" href="/News">
          News
        </Link>
        <Link className="menu-item" href="/Blogs">
          Blogs
        </Link>
        <Link className="menu-item" href="/Articles">
          Articles
        </Link>
        <Link className="menu-item" href="/Affiliate">
          Affiliate
        </Link>
        <Link className="menu-item" href="/Quiz">
          Quiz
        </Link>
        <Link className="menu-item" href="/AboutUs">
          About-Us
        </Link>
      </Menu>
    </div>
  );
}

export default Sidebar;
