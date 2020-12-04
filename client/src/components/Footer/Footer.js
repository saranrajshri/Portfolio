import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CustomDivider from "../CustomDivider/CustomDivider";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left"></div>
        <div className="footer__center">
          <p className="footer__shortText">
            If you have any questions or just want to say hello, don't hesitate
            to
            <a href="#"> send an email</a>
          </p>
        </div>
        <div className="footer__right"></div>
      </div>
      <CustomDivider />
      <center>
        <div className="footer__bottomLinks">
          <div className="footer_menu">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Achievements</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          Made with <FontAwesomeIcon icon={faHeart} /> Shri Saran Raj
        </div>
      </center>
    </>
  );
};

export default Footer;
