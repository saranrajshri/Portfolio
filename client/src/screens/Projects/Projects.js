import React, { useContext, useEffect } from "react";
import { Banner, Footer, Header, ProjectsList } from "../../components";
import { Context } from "../../context/Context";
import { onPageLoadScrollTop } from "../../utils/utils";

const Projects = () => {
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
      <Banner />
      <ProjectsList />
      <Footer delayDuration={0} />
    </div>
  );
};

export default Projects;
