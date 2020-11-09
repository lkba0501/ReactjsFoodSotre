import React from 'react';
import { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Product from './components/Product/Product-List';
import Reservation from './components/Reservation/Reservation';
import Intro from './components/Intro/Intro';
import Trend from './components/Trend/Trend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-page">
          <Nav />
          <div className="home-wellcome">
            <h1 className="custom-style">Welcome to the</h1>
            <h1 className="custom-style">Foods House</h1>
          </div>
          <div className="home-menu">
            <a href="http://localhost:3500/" className="button-menu-ousite">
              <span className="button-menu">SHOW MENU</span>
            </a>
          </div>
        </div>

        <div className="reservations-app"><Reservation /></div>

        <div className="intro-app"><Intro /></div>

        <div className="trend-food"><Trend /></div>

        <div className="home-product"><Product /></div>

        <div className="home-footer">
          <div className="open-hours-detail">
            <div>Opening Hours</div>
            <div>Mon - Fri: 5pm - 10pm</div>
            <div>Sat - Sun: 5pm - 12pm</div>
          </div>
          <div className="contact-us-and-address">
            <span className="made-by">© Foods House made by Ba Le</span>
            <span className="address">364 Cong Hoa Street, Ho Chi Minh City, Viet Nam. Tel 033-5835-142.</span>
          </div>
        </div>
      </div>
    );
  };
}

export default App;

