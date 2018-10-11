import React, { Component } from 'react';
import Input from "./Input.js"
import GoodRobot from "./GoodRobot.js"
import Kanyebot from "./Kanyebot.js"
import BadRobot from "./BadRobot.js"
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'd'


        }
    }
    updateMessage(message){
        this.setState({message: message})
    }

  render() {
    return (
      <div>
        <Input message = {this.state.message} handleChange= {this.updateMessage.bind(this)}/>
        <GoodRobot message = {this.state.message}/>
        <Kanyebot message = {this.state.message}/>
        <BadRobot message = {this.state.message}/>
      </div>
    );
  }
}

export default App;
