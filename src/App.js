import React, { Component } from 'react';
import Header from './components/Header/Header';
import EnterNumber from './components/EnterNumber/EnterNumber';
import CurrentTotal from './components/CurrentTotal/CurrentTotal';
import History from './components/History/History';
import Footer from './components/Footer/Footer';
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
    if (Number(tempTotal) + Number(inputNumber) > 12){
      alert('This would go outside the max range!')
    } else if (Number(tempTotal) + Number(inputNumber) < -2) {
      alert('This would go outside the minimum range!')
    } else {
      this.setState({ currentTotal: Number(tempTotal) + Number(inputNumber) });
    }
  }

  updateHistory = () => {
    this.setState({historyArray: [...this.state.historyArray, this.state.currentTotal],
                    currentTotal: 0,
    });
  }

  deleteHistory = (historyIndex) => {
    //console.log(historyIndex); 
    //creates new array by filtering current history and passing all through but index that matched data in element clicked in history component
    const newHistory = this.state.historyArray.filter((c, i) => {return i !== Number(historyIndex) });
    //console.log(newHistory);
    this.setState({historyArray: newHistory})
  }

  deleteAllHistory = () => {
    this.setState({historyArray: this.state.historyArray.filter((c , i) => {return i === -1} )});
  }

  render() {
    //console.log(this.state.currentTotal);
    //console.log(JSON.stringify(this.state.historyArray));
    //console.log(this.state.historyArray);
    
    return (
      <div className="App">
        <Header />
        <EnterNumber changeCurrentTotal={this.changeCurrentTotal}/>
        <CurrentTotal currentTotal={this.state.currentTotal} updateHistory={this.updateHistory}/>
        <History historyArray={this.state.historyArray} 
                 deleteHistory = {this.deleteHistory}
                 deleteAllHistory = {this.deleteAllHistory} 
        />
        <Footer />
      </div>
    );
  }
}

export default App;
