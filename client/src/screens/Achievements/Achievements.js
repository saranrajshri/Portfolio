import React, { useContext, useEffect } from "react";
import { onPageLoadScrollTop } from "../../utils/utils";

import {
  AchievementsBanner,
  AchievementsList,
  Footer,
  Header,
  SkillsList,
} from "../../components";
import { Context } from "../../context/Context";

const Achievements = () => {
  const [state] = useContext(Context);
  // Scroll Top
  useEffect(() => {
    onPageLoadScrollTop();
    if (state.isDarkModeEnabled) {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "dark");
    } else {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "light");
    }
  }, []);
  return (
    <div>
      <Header />
      <AchievementsBanner />
      <AchievementsList />
      <SkillsList />
      <Footer delayDuration={0} />
    </div>
  );
};

export default Achievements;
