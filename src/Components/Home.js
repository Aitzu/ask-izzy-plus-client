import React, { Component } from 'react';
import "../stylesheets/Home.css";
import Navigation from './Navigation';
import Login2 from './Login2';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      // CONTAINER: ENTIRE PAGE (DODGERBLUE)
      <div className="homepage-container">

        {/* HEADER: NAVIGATION BAR/HERO IMAGE/LOGO */}
        <Navigation />
      
        {/* CONTAINER: MAIN */}
        <div className="body-container">
          {/* HEADER: ASK IZZY */}
          <h1>Welcome to Ask Izzy Plus</h1>
          {/* ASK IZZY PLUS: LOGIN BUTTON VIA GOOGLE OAUTH */}
          <Login2 />
        </div>
        
        {/* FOOTER: Main Ask Izzy Links */}
        <Footer />
      </div>
    );
  }
}

export default Home;