import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

import { ContextProvider } from "./context/Context";
import Achievements from "./screens/Achievements/Achievements";

import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/achievements" exact component={Achievements} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
