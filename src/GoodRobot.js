import React, { Component } from 'react';
import App from './App.js'

class GoodRobot extends Component {
  render() {
    return (
      <div>
        <h2> I hear you saying {this.props.message} </h2>
      </div>
    );
  }
}

export default GoodRobot;
