import React, { Component } from 'react';
import './History.css'

class History extends Component {
    compDeleteHistory = (event) => {
        //console.log(event.currentTarget.dataset.index);
        
        this.props.deleteHistory(Number(event.currentTarget.dataset.index));
    }

    handleButtonClick = () => {
        this.props.deleteAllHistory();
    }

    render() {
        let HistoryListJSX;
        if (this.props.historyArray.length > 0) {
            HistoryListJSX = [];
            for (let history of this.props.historyArray) {
                let index = this.props.historyArray.indexOf(history);
                let listItem = <li data-index={index} onClick={this.compDeleteHistory}>{history}</li>;
                HistoryListJSX.push(listItem);  
            }
        } else {
            HistoryListJSX = <li>You have no history at this time.</li>;
        }
        return (
            <section>
                <h2>Your History</h2>
                <button onClick={this.handleButtonClick}>Clear History</button>
                <ul>
                {HistoryListJSX}
                </ul>
            </section>
        )
    }
}

export default History;