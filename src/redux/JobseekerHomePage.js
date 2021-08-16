import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import JobsList from "./components/jobs-list";
import JobsList1 from "./components/jobs-list1";
import JobsList2 from "./components/jobs-list2";
import JobsList3 from "./components/jobs-list3";

class JobseekerHomePage extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/jobs"} className="navbar-brand">
            Search Criteria
          </Link>
          <div className="navbar-nav mr-auto">
        
            <li className="nav-item">
              <Link to={"/jobs"} className="nav-link" className="row" className="col-sm-3"> 
                Jobs By Title
              </Link>
              <Link to={"/jobs1"} className="nav-link" className="row" className="col-sm-3"> 
                Jobs By Location
              </Link>
              <Link to={"/jobs2"} className="nav-link" className="row" className="col-sm-3"> 
                Jobs By Skillset
              </Link>
              <Link to={"/jobs3"} className="nav-link" className="row" className="col-sm-3"> 
                Jobs By JobId
              </Link>
            </li>
          
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/jobs"]} component={JobsList} />
            <Route exact path={["/jobs1"]} component={JobsList1} />
            <Route exact path={["/jobs2"]} component={JobsList2} />
            <Route exact path={["/jobs3"]} component={JobsList3} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default JobseekerHomePage;