"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import logo from '../../assets/logo.png'

const Navigation = () => {
  const [showResponsiveNav, setShowResponsiveNav] = useState(true);
  return (
    <nav className="topnav" id="myTopnav">
      <div className="logo">
        <img
          width={150}
          height={35}
          src="/assets/logo.png"
          alt="Digital Marketing"
        />
        <li className="icon">
          {
            <GiHamburgerMenu
              size={25}
              color="black"
              onClick={() => setShowResponsiveNav(!showResponsiveNav)}
            />
          }
        </li>
      </div>
      <ul className={showResponsiveNav ? "navBody" : "click"}>
        <li>
          <a href="#banner" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <a href="#Pricing">Pricing</a>
        </li>
        <li>
          <a href="#request" className="nav-btn">
            <button>Free SEO Analysis</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
