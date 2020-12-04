import React from "react";
import "./CenterBanner.scss";

import AvatarImage from "../../images/avatar.png";

const CenterBanner = () => {
  return (
    <div className="banner">
      <div className="banner__avatar" alt="avatar">
        <img src={AvatarImage} />
      </div>
      <div className="banner__title">
        <h1 className="banner__titleText">Hii! I'm Saran Raj</h1>
      </div>
    </div>
  );
};

export default CenterBanner;
