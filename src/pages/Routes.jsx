import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import routes from "../config/router";
import Loader from "../components/Loader/Loader";

class Routes extends Component {
  returnRoutes() {
    return routes.map((route) => <Route key={route.path} {...route} />);
  }

  render() {
    return (
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            {this.returnRoutes()}
            <Redirect from="*" to="home" />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default Routes;
