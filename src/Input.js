import React, { Component } from 'react';



class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    handleChange = (e) => {
        console.log(this)
        this.props.handleChange(e.target.value)
    }
  render() {
    return (
      <div>
        <input value={this.props.message} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default Input;
