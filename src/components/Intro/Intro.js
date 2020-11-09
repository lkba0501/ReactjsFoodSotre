import React from 'react';
import { Component } from 'react';
import '../Intro/Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <div className="background-img">
          <div className="image-content"></div>
        </div>
        <div className="intro-content">
          <div className="left-content">
            <div className="slogan-text">
              Delicious and nutritious
            </div>
            <div className="decription-slogan">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="right-content"></div>
        </div>
      </div>
    );
  };
}

export default Intro;



