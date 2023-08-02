import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import img from "./sailesh.jpeg";

const TeamCarousel = () => {
  return (
    <div className="messege">
      <div className="messege-card">
        <div className="messege-card-left">
          <img src={img.src} alt="" srcSet="" />
          <span>
            <a href="https://www.facebook.com/bhawesh.kafle.9">
              <BsFacebook
                size={25}
                className="fa-icon"
                href="https://www.facebook.com/bhawesh.kafle.9"
              />
            </a>
            <a href="https://www.facebook.com/bhawesh.kafle.9">
              <BsInstagram
                size={25}
                className="fa-icon"
                href="https://www.facebook.com/bhawesh.kafle.9"
              />
            </a>
            <a href="https://www.linkedin.com/in/lekhnath-kafle-436111156">
              <BsLinkedin
                size={25}
                className="fa-icon"
                href="https://www.linkedin.com/in/lekhnath-kafle-436111156/"
              />
            </a>
          </span>
        </div>
        <div className="messege-card-right" data-aos="zoom-out">
          <h1>Sailesh Maharzan</h1>
          <h2 style={{ color: "#b9001f" }}>CEO</h2>
          <div className="messege-card-right-article">
            <RiDoubleQuotesL
              size={52}
              color="#b9001f"
              className="upper-quote"
            />
            <p style={{ color: "#000" }}>
              Elevate Your Digital Presence: Empower Your Brand's Success with
              the Dynamic Energy of Our SEO Team. Harness the Potential of
              Organic Traffic, Outshine Competitors, and Amplify Conversions.
              Trust Our Proven Expertise, Tailored Strategies, and Passionate
              Team to Propel Your Business Beyond Expectations. Choose SEO
              Excellence and Unleash Your Online Success Story Today!
            </p>
            <RiDoubleQuotesR
              size={52}
              color="#b9001f"
              alig
              className="lower-quote"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
