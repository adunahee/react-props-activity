import React, { Component } from 'react';
import './History.css'

class History extends Component {

    render() {
        let HistoryListJSX;
        if (this.props.historyArray.length > 0) {
            HistoryListJSX = [];
            for (let history of this.props.historyArray) {
                let listItem = <li>{history}</li>;
                HistoryListJSX.push(listItem);
            }
        } else {
            HistoryListJSX = <li>You have no history at this time.</li>;
        }
        return (
            <section>
                <h2>Your History</h2>
                <ul>
                {HistoryListJSX}
                </ul>
            </section>
        )
    }
}

export default History;