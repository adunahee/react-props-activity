import React, { Component } from 'react';
import '../EnterNumber/EnterNumber.css';
import './CurrentTotal.css';

class CurrentTotal extends Component {
    submitHistory = (event) => {
        event.preventDefault();
        this.props.updateHistory();
    }


    render() {
        let constDisplayTotal;
        if (this.props.currentTotal !== 0) {
            constDisplayTotal = this.props.currentTotal;
        }

        return (
            <form className="current-total" onSubmit={this.submitHistory}>
                <h2>Your Current Total</h2>
                <strong>{constDisplayTotal}</strong>
                <br />
                <br />
                <button type="submit">Submit</button>
                <p>Click 'Submit' to save your current total.</p>
            </form>
        )
    }
}

export default CurrentTotal;