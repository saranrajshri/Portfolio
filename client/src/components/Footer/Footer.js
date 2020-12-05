import React, { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomDivider from "../CustomDivider/CustomDivider";
import "./Footer.scss";

const Footer = () => {
  const [showContent, setContentVisible] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const yPosition = window.scrollY;
      setContentVisible(true);
      setLastYPos(yPosition);
    }
    window.addEventListener("scroll", handleScroll, false);
  }, [lastYPos]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ delay: 3, duration: 2 }}
      >
        <div className="footer">
          <div className="footer__left"></div>
          <div className="footer__center">
            <p className="footer__shortText">
              If you have any questions or just want to say hello, don't
              hesitate to
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
      </motion.div>
    </>
  );
};

export default Footer;
