import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import JobsList from "./components/jobs-list";
import JobsList1 from "./components/jobs-list1";
import JobsList2 from "./components/jobs-list2";
import JobsList3 from "./components/jobs-list3";
import Addtocart from "./components/addtocart";
import Viewcart from "./components/viewcart";
import Removejob from "./components/removejob";

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
            {/* link added to show all jobs posted by all empolyer*/}
            <Link to={"/viewcart"} className="nav-link row col-sm-3">
              View Cart
            </Link>
          
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/jobs"]} component={JobsList} />
            <Route exact path={["/jobs1"]} component={JobsList1} />
            <Route exact path={["/jobs2"]} component={JobsList2} />
            <Route exact path={["/jobs3"]} component={JobsList3} />
            <Route  exact path={["/addtocart/:jobId"]} component={Addtocart} />
            <Route  exact path={["/viewcart"]} component={Viewcart} />
            <Route  exact path={["/removejob/:jobId"]} component={Removejob}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default JobseekerHomePage;