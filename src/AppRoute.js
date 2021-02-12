import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";

function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoute;
