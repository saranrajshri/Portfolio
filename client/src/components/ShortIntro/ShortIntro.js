import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

import CustomDivider from "../CustomDivider/CustomDivider";
import "./ShortIntro.scss";

const ShortIntro = () => {
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
        transition={{ duration: 2 }}
      >
        <div className="shortIntro">
          <div className="shortIntro__left"></div>
          <div className="shortIntro__center">
            <p>
              My Name is Shri Saran Raj. I'm a 3rd Year CSE Student and I'm a
              Full Stack Web and Mobile app developer.
            </p>
            <p className="shortIntro__shortText">
              I am currently looking to SDE oportunities. If you want, you can
              view my <a href="#">LinkedIn profile</a>, download my
              <a href="#"> updated resume</a> or see my latest work.
            </p>
            <p className="shortIntro__shortText">
              I also do competitive programming. I regularly practice on{" "}
              <a href="#">LeetCode</a>,<a href="#"> CodeChef</a>,{" "}
              <a href="#"> HackerRank</a>
            </p>
          </div>
          <div className="shortIntro__right"></div>
        </div>
        <CustomDivider />
      </motion.div>
    </>
  );
};
export default ShortIntro;
