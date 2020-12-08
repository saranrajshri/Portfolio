import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Context } from "../../../context/Context";
import CustomDivider from "../../Global/CustomDivider/CustomDivider";

import "./BlogList.scss";

const BlogList = () => {
  const [state] = useContext(Context);
  const [showContent, setContentVisible] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  // Detect scroll
  useEffect(() => {
    function handleScroll() {
      const yPosition = window.scrollY;
      setContentVisible(true);
      setLastYPos(yPosition);
    }
    window.addEventListener("scroll", handleScroll, false);
  }, [lastYPos]);
  return (
    <div className="projectsList">
      <div className="projectsList__left"></div>
      <div className="projectsList__center">
        {state.projects.map((project, index) => {
          return (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <div className="projectsListItem" key={index}>
                  <div className="project__title">
                    <h6>{project.title}</h6>
                  </div>
                  <p>{project.descriptionParagraph1}</p>
                  <p>{project.descriptionParagraph2}</p>
                  <a
                    href={`${project.sourceCodeLink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginLeft: 5 }}
                    />
                  </a>
                </div>
                <CustomDivider />
              </motion.div>
            </>
          );
        })}
      </div>
      <div className="projectsList__right"></div>
    </div>
  );
};
export default BlogList;
