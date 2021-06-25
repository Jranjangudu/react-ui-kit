import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import index from "./container/Maincontainer";
import Homepage from "./container/Homepage/Homepage";

import Navbar from "./container/navbarwrapper/Navbar";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/component" component={index} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
