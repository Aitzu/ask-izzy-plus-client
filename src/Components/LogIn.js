import React, { Component } from "react";
import GoogleLogin from "react-google-login";
// import axios from 'axios';
import history from "../history";

// REACT-GOOGLE-LOGIN: A Google oAUth Sign-in/Login Component for React
// Required: clientId, onSuccess and onFailure callback
// FIXME: Rename LogIn component and filename to Login???
class LogIn extends Component {
  responseGoogle = response => {
    // console.log(response.tokenId);
    localStorage.setItem("token", response.tokenId);
    history.push("/dashboard");
  };

  errorGoogle = response => {
    console.log(response);
  };

  render() {
    const googleClient = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    return (
      <React.Fragment>
        <GoogleLogin
          clientId={googleClient}
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.errorGoogle}
        />
      </React.Fragment>
    );
  }
}

export default LogIn;