import React, { useContext, useEffect } from "react";
import { BlogIndexBanner, BlogList, Footer, Header } from "../../components";
import { Context } from "../../context/Context";
import { onPageLoadScrollTop } from "../../utils/utils";
import "./BlogIndex.scss";

const BlogIndex = () => {
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
      <BlogIndexBanner />
      <BlogList />
      <Footer delayDuration={0} />
    </div>
  );
};

export default BlogIndex;
