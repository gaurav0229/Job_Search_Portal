import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
      
    
    };

    this.EmployerHomePage=this.EmployerHomePage.bind(this);


  }


  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  EmployerHomePage(){
    this.props.history.push('/EmployerhomePage');
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Registration Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
         
         <h2> <strong>Welcome To GetHired ,  {currentUser.username}</strong> </h2>

          {/* <Link to='/empHome' className='btn-mobile'>
         <button
        className="btn" onClick={onClick} type={type}
      >
        {children}
         </button>
        </Link>  */}

        {/* <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul> */}

      </div>: null}
      </div>
    );
  }
}