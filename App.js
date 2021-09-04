import React, { Component } from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = { displayBio: 1 };
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }
  increaseCounter() {
    if (this.state.displayBio < 1000) {
      this.setState({ displayBio: Number(this.state.displayBio) + 1 });
    } else {
      alert('counter reached upper limit 1000');
    }
  }
  decreaseCounter() {
    if (this.state.displayBio > 0) {
      this.setState({ displayBio: Number(this.state.displayBio) - 1 });
    } else {
      alert('counter reached lowet limit 0');
    }
  }
  changeCounterValue = event => {
    console.log(event);
    alert(event.target.value);
    if (Number(event.target.value) <= 1000 && Number(event.target.value) >= 0) {
      this.setState({ displayBio: Number(event.target.value) });
    } else {
      event.preventDefault(true);
    }
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.decreaseCounter} className="btn-decrement">
            {' '}
            -
          </button>
          <input
            type="number"
            onChange={this.changeCounterValue}
            value={this.state.displayBio}
            className="input"
          />
          <button onClick={this.increaseCounter} className="btn-increment">
            {' '}
            +{' '}
          </button>
        </div>
      </div>
    );
  }
}
export default App;
