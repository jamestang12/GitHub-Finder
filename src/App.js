import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Githubstate from "./context/github/GithubState";
import Alertstate from "./context/alert/AlertState";
import Home from "./components/pages/Home";
import NotFund from "./components/pages/NotFound";

const App = () => {
  return (
    <Githubstate>
      <Alertstate>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  // render={(props) => (
                  //   <Fragment>
                  //     <Search />
                  //     <Users />
                  //   </Fragment>
                  // )}
                  component={Home}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFund} />
              </Switch>
            </div>
          </div>
        </Router>
      </Alertstate>
    </Githubstate>
  );
};

export default App;
