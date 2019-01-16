import React, { Component } from 'react';
import Header from './components/Header/Header';
import EnterNumber from './components/EnterNumber/EnterNumber';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Enter a number and then change it using the buttons on the side.</p>
        <EnterNumber />
      </div>
    );
  }
}

export default App;
