import React, { Component } from 'react';
import App from './App.js'

class Kanyebot extends Component {
  render() {
    return (
      <div>
        <h2> I{"\'"}m going to let you finish but Beyonce is {this.props.message} </h2>
      </div>
    );
  }
}

export default Kanyebot;
