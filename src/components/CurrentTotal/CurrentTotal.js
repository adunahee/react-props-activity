import React, { Component } from 'react';
import '../EnterNumber/EnterNumber.css';
import './CurrentTotal.css';

class CurrentTotal extends Component {
    submitHistory = (event) => {
        event.preventDefault();
        this.props.updateHistory();
    }
    render() {

        return (
            <form className="current-total" onSubmit={this.submitHistory}>
                <h2>Your Current Total</h2>
                <strong>{this.props.currentTotal}</strong>
                <br />
                <br />
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CurrentTotal;