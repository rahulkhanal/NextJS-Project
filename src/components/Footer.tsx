import React from "react";
import locationimg from "../assets/location.png";
import mailimg from "../assets/mail.png";
import phoneimg from "../assets/telephone.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import logo from "../assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-service">
          <h2>Services</h2>
          <div>
            <ul>
              <li>
                <p>Search Engine Marketing</p>
              </li>
              <li>
                <p>Data Science & Analytics</p>
              </li>
              <li>
                <p>Mobile Marketing</p>
              </li>
              <li>
                <p>Content Marketing</p>
              </li>
              <li>
                <p>Engagement Marketing</p>
              </li>
              <li>
                <p>Social Media Marketing</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <div>
            {/* <p>
              Lorem ipsum coloe sir amet, consect, etru adipicing elit. Nam
              Pellentisque Justo Ligla.
            </p> */}
            <span>
              <img src={locationimg.src} alt="" srcSet="" />
              69 Aldwick Road
            </span>
            <br />
            <span>
              <img src={mailimg.src} alt="" srcSet="" />
              hr@uksmm.com
            </span>
            <br />
            <span>
              <img src={phoneimg.src} alt="" srcSet="" />
              +44 7590612196
            </span>
          </div>
        </div>
        <div>
          <h2>Touch</h2>
          <div className="footer-social">
            <img src={facebook.src} alt="" />
            <img src={instagram.src} alt="" />
            <img src={twitter.src} alt="" />
          </div>
        </div>
      </div>
      <div className="logo">
        <img src={logo.src} alt="" srcSet="" />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <hr />
        <center style={{ padding: "1rem" }}>
          Copyright 2023 UK Digital Marketing inc, All rights reserved
          <br />
          Created By{" "}
          <Link
            style={{ color: "#fff" }}
            href="https://www.digitalpravidhi.com/"
          >
            Digital Pravidhi
          </Link>
        </center>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
