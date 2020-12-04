import React from "react";
import "./App.scss";
import CenterBanner from "./components/CenterBanner/CenterBanner";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <CenterBanner />
    </div>
  );
};

export default App;
