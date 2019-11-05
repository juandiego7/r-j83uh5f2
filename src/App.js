import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { counter: 0 }
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.onChangeText}></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }

  onChangeText = (e) => {
    const length = e.target.value.length
    this.setState({
      counter: length
    });
  }
}

export default App;
