import React from 'react';
import { Component } from 'react';
import '../Reservation/Reservation.css';
import DatePicker from '../Date-Picker/Date-Picker'

let time = 'Time';
let size = 'Party Size';


class Reservation extends Component {
 
  updateTime(selectedTime) {
    time = selectedTime;
  }

  updateSize(selectedSize) {
    size = selectedSize === 'Others' ? size : `${size} People`;
  }

  render() {
    const reservationsTime = ['05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', 'Others'];
    const reservationsSize = ['1', '2', '3', '4', '5', '6', 'Others'];
    const dropDownTimes = reservationsTime.map(time => {
      return <li className="dropdown-item"><a onClick="updateTime(size)">{time}</a></li>
    });
    const dropDownSize = reservationsSize.map(size => {
      if (size === 'Others') {
        return <li className="dropdown-item"><a onClick="updateSize(size)">{size}</a></li>
      }
      return <li className="dropdown-item"><a onClick="updateSize(size)">{size} People</a></li>
    });

    return (
      <div className="reservations-container">
        <h3 className="title-reservations">Reservations</h3>
        <div className="row reservations-detail">
          <div className="col-md-3 btn-default">
            <div className="test-date-picker">
              <DatePicker />
            </div></div>
          <div className="col-md-3">
            <div className="dropdown">
              <button className="btn-default dropdown-toggle" type="button" data-toggle="dropdown">{time}<span className="caret"></span></button>
              <ul className="dropdown-menu">
                {dropDownTimes}
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="dropdown">
              <button className="btn-default dropdown-toggle" type="button" data-toggle="dropdown">{size}<span className="caret"></span></button>
              <ul className="dropdown-menu">
                {dropDownSize}
              </ul>
            </div>
          </div>
          <div className="col-md-3"><button className="btn-default btn-book"><span>Book Now</span></button></div>
        </div>
      </div>
    );
  };
}

export default Reservation;



