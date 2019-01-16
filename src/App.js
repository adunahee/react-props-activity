import React, { Component } from 'react';
import Header from './components/Header/Header';
import EnterNumber from './components/EnterNumber/EnterNumber';
import CurrentTotal from './components/CurrentTotal/CurrentTotal';
import History from './components/History/History';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      currentTotal: 0,
      historyArray: [],
    };
  }

  changeCurrentTotal = (inputNumber) => {
    let tempTotal = this.state.currentTotal;
    //console.log('inEnterNumberChange');
    this.setState({currentTotal: Number(tempTotal) + Number(inputNumber)});
  }

  updateHistory = () => {
    this.setState({historyArray: [...this.state.historyArray, this.state.currentTotal],
                    currentTotal: 0,
    });
    
  }

  render() {
    //console.log(this.state.currentTotal);
    //console.log(JSON.stringify(this.state.historyArray));
    
    return (
      <div className="App">
        <Header />
        <p>Enter a number. Then add or subtract it to your total.</p>
        <EnterNumber changeCurrentTotal={this.changeCurrentTotal}/>
        <CurrentTotal currentTotal={this.state.currentTotal} updateHistory={this.updateHistory}/>
        <p>Click 'Submit' to save the current total in history.</p>
        <History historyArray={this.state.historyArray}/>
      </div>
    );
  }
}

export default App;
