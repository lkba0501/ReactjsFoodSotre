import React from 'react';
import { Component } from 'react';
import '../Nav/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="social-network">
          facebook
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-content">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand logo-app" href="http://localhost:3500/">Foods House</a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3500/">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3500/">Our Story</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3500/">Contact Us</a>
              </li>

              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://localhost:3500/" id="navbardrop" data-toggle="dropdown">Menu</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="http://localhost:3500/">Pizza</a>
                  <a className="dropdown-item" href="http://localhost:3500/">Spaghetti</a>
                  <a className="dropdown-item" href="http://localhost:3500/">Beefsteak</a>
                </div>
              </li> */}
            </ul>

            <div className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

export default Nav;



