import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavbarComponent } from "./components";
import { Home, Success } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/success" component={Success} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
