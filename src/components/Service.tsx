import React from "react";
import seoImg from "../assets/partners/seo-01.png";
import mobileMarketing from "../assets/partners/mobile-media-01.png";
import socialMarketing from "../assets/partners/social-media-01.png";
import contentMarketing from "../assets/partners/content-media-01.png";
const Services = () => {
  return (
    <div className="services" id="services" data-aos="flip-right">
      <h1>What We Do ?</h1>
      <p>
        we prioritize customer satisfaction, timely delivery, and exceeding
        expectations
      </p>
      <div className="service-main">
        <article>
          <div className="servicesImg">
            <img src={seoImg.src} alt="" srcSet="" width={"50%"} />
          </div>
          <div>
            <h2>Search Engine Optimization</h2>
            <span>
              We excel in SEO, driving targeted traffic through keyword
              research, content optimization, link building, and technical
              enhancements. Our strategies boost search rankings, attract
              organic traffic, and drive business growth.
            </span>
          </div>
          {/* <button>Contact</button> */}
        </article>
        <article>
          <div className="servicesImg">
            <img src={mobileMarketing.src} alt="" srcSet="" width={"30%"} />
          </div>
          <div>
            <h2>Mobile Marketing</h2>
            <span>
              Mobile marketing targets users on smartphones and tablets through
              channels like mobile websites, apps, SMS, and location-based
              marketing. It maximizes reach, engagement, and conversions by
              leveraging the personal and ubiquitous nature of mobile devices.
            </span>
          </div>
          {/* <button>Contact</button> */}
        </article>
        <article>
          <div className="servicesImg">
            <img src={socialMarketing.src} alt="" srcSet="" width={"30%"} />
          </div>
          <div>
            <h2>Social Media Marketing</h2>
            <span>
              Social media marketing utilizes platforms like Facebook,
              Instagram, and Twitter to promote brands, engage audiences, and
              drive website traffic. It leverages interactivity and broad reach
              to build communities and boost brand visibility.
            </span>
          </div>
          {/* <button>Contact</button> */}
        </article>
        <article>
          <div className="servicesImg">
            <img src={contentMarketing.src} alt="" srcSet="" width={"70%"} />
          </div>
          <div>
            <h2>Content Marketing</h2>
            <span>
              Content marketing creates and distributes valuable content to
              engage and attract audiences. It builds brand awareness,
              credibility, and relationships through informative and
              entertaining content, driving profitable customer actions.
            </span>
          </div>
          {/* <button>Contact</button> */}
        </article>
      </div>
      {/* <button>Get In Touch Today</button> */}
    </div>
  );
};

export default Services;
