import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import CustomDivider from "../CustomDivider/CustomDivider";
import "./ShortIntro.scss";
import { Context } from "../../context/Context";

const ShortIntro = () => {
  const [state, dispatch] = useContext(Context);
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
              view my{" "}
              <a href={`${state.socialMediaLinks.linkedIn}`} target="_blank">
                LinkedIn profile
              </a>
              , download my
              <a href={`${state.socialMediaLinks.resume}`} target="_blank">
                {" "}
                updated resume
              </a>{" "}
              or see my latest work.
            </p>
            <p className="shortIntro__shortText">
              I also do competitive programming. I regularly practice on{" "}
              <a href={`${state.socialMediaLinks.leetCode}`}>LeetCode</a>,
              <a href={`${state.socialMediaLinks.codeChef}`}> CodeChef</a>,{" "}
              <a href={`${state.socialMediaLinks.hackerRank}`}> HackerRank</a>
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
