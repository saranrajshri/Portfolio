import React from "react";
import { motion } from "framer-motion";

import "./App.scss";

import CenterBanner from "./components/CenterBanner/CenterBanner";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <Header />
        <CenterBanner />
      </div>
    </motion.div>
  );
};

export default App;
