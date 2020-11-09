import React from 'react';
import { Component } from 'react';
import '../Trend/Trend.css';

class Trend extends Component {
  render() {
    return (
      <div className="trend-container">
        <div className="row trend-content">
          <div className="col-md-4">
            <ul className="price">
              <li className="header">Combo Normal</li>
              <li className="grey">2 People</li>
              <li>Beer</li>
              <li>Salad</li>
              <li>Spaghetti</li>
              <li>Cake</li>
              <li className="grey"><button className="button">Book</button></li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="price">
              <li className="header">Combo Medium</li>
              <li className="grey">3 People</li>
              <li>Beer</li>
              <li>Salad</li>
              <li>Beefsteak</li>
              <li>Cake</li>
              <li className="grey"><button className="button">Book</button></li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="price">
              <li className="header">Combo Premium</li>
              <li className="grey">6 People</li>
              <li>Wine</li>
              <li>Salad</li>
              <li>Spaghetti</li>
              <li>Beefsteak</li>
              <li className="grey"><button className="button">Book</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default Trend;



