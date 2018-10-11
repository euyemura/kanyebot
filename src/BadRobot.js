import React, { Component } from 'react';
import App from './App.js'

class GoodRobot extends Component {
  render() {
    return (
      <div>
        <h2> I hear you saying {this.props.message.length} </h2>
      </div>
    );
  }
}

// changeLetters = () => {
//     for (let i = 0; i < this.props.message.length; i++) {
//         if
//     }
// }


export default GoodRobot;
