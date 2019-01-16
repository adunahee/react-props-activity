import React, { Component } from 'react';
import './EnterNumber.css'

class EnterNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNumber: 0,
        }
    }
    addByInput = (event) => {
        event.preventDefault();
        this.props.changeCurrentTotal(this.state.inputNumber);
    }

    subtractByInput = (event) => {
        event.preventDefault();
        this.props.changeCurrentTotal(0 - this.state.inputNumber);
    }

    updateInputNumber = (event) => {
        //console.log(event.target.value);
        this.setState({inputNumber: Number(event.target.value)});
        
    }

    render() {
        //console.log(this.state.inputNumber);
        
        return(
            <form>
                <h2> Enter A Number</h2>
                <button onClick={this.addByInput}>Add</button>
                <input type="number" onChange={this.updateInputNumber}></input>
                <button onClick={this.subtractByInput}>Subtract</button>
            </form>
        )
    }
}

export default EnterNumber;