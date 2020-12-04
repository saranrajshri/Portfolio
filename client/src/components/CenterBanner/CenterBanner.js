import React from "react";
import { motion } from "framer-motion";

import "./CenterBanner.scss";

import AvatarImage from "../../images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const CenterBanner = () => {
  return (
    <div className="banner">
      <div className="banner__avatar">
        <img src={AvatarImage} alt="avatar" />
      </div>
      {/* Animate */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="banner__title">
          <h1 className="banner__titleText">Hii! I'm Saran Raj</h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
      >
        <motion.div whileHover={{ y: -3 }}>
          <button className="banner__exploreButton">
            EXPLORE
            <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: 10 }} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CenterBanner;
