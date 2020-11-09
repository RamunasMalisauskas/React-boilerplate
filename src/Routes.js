import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home.jsx"));
const AboutLazy = lazy(() => import("./pages/About/About.jsx"));

function Routes() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Suspense fallback="loading">
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/about" component={AboutLazy} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default Routes;
