import React, { useContext, useEffect } from "react";
import { onPageLoadScrollTop } from "../../utils/utils";

import { ContactForm, Footer, Header } from "../../components";
import { Context } from "../../context/Context";

const Contact = () => {
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
      <ContactForm />
      <Footer delayDuration={0} />
    </div>
  );
};

export default Contact;
