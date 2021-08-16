import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
// import "C:/MyExes/bootstrap-4.0.0/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Footer from "./components/Footer";
import EmployerHomePage from "./components/Emp/EmployerHomePage";
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import Moderator from "./controller/Moderator";

import Updatejob from "./components/Emp/UpdateJob";
import Deletejob from "./components/Emp/deletejob";
import PostJob from "./components/Emp/PostJob";
import Applicants from "./components/Emp/Applicants";
import ContactUs from "./components/Pages/ContactUs";
import JobseekerHomePage from "./redux/JobseekerHomePage";
import Profile1 from "./components/profile.component.1";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_EMPLOYER"),
        showAdminBoard: user.roles.includes("ROLE_JOBSEEKER"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to={"/home"} className="navbar-brand">
            GetHired
          </Link>
          <div className="navbar-nav mr-auto collapse navbar-collapse">
            <ul class="navbar-nav justify-content-end">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/aboutus"} className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contactUs"} className="nav-link">
                  Contact Us
                </Link>
              </li>
      {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/EmployerhomePage"} className="nav-link">
                    Employer Board
                  </Link>
                </li>
              )}

            


              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/JobseekerHomePage"} className="nav-link">
                    Jobseeker Board
                  </Link>
                </li>
              )}
            </ul>

          
          </div>
          

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>

              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>


              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>


            </div>
          )}

        </nav>
        
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Moderator} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/moddata" component={Moderator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/footer" component={Footer} />
            <Route path="/EmployerhomePage" component={EmployerHomePage} />
            <Route path="/postjob" component={PostJob}></Route>
            <Route path="/updatejob/:jobId" component={Updatejob}></Route>
            <Route path="/deletejob/:jobId" component={Deletejob}></Route>
            <Route path="/applicants/:jobId" component={Applicants}></Route>
            <Route path="/ContactUs" component={ContactUs}></Route>
            <Route path="/JobseekerHomePage" component={JobseekerHomePage}></Route>
            <Route path="/profile1" component={Profile1}></Route>

          </Switch>
        </div>
       

        { /*<AuthVerify logOut={this.logOut}/> */}
        <Footer />

      </div>
    );
  }
}

export default App;


