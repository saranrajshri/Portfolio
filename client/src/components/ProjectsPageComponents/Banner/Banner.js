import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import "./Banner.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import NotesImage from "../../../images/notes.png";

import { CustomDivider } from "../..";

const Banner = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="banner">
          <div className="banner__avatar">
            <img src={NotesImage} alt="avatar" />
          </div>
          <div className="banner__title">
            <h2>My Projects</h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  activeClass="active"
                  to="centerBanner"
                  spy={true}
                  smooth={true}
                  offset={400}
                  duration={500}
                >
                  <button className="banner__exploreButton">
                    EXPLORE
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      style={{ marginLeft: 10 }}
                    />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <CustomDivider />
      </motion.div>
    </div>
  );
};

export default Banner;
