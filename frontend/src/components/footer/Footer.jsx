import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin, // Import LinkedIn icon
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="https://www.linkedin.com/in/sameer-kavale-27a471296/">Sameer Kavale</a>
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sameer-kavale-27a471296/">
            <AiFillLinkedin />
          </a>
          <a href="https://x.com/kavale_sam39369?t=bmof0cRGKV21Nw7DL6VsJQ&s=08">
            <AiFillTwitterSquare />
          </a>
          <a href="https://www.instagram.com/sameerkavale?igsh=YTNpd2V3bmpobWZw">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
