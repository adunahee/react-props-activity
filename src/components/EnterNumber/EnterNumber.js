import React, { Component } from 'react';
import './EnterNumber.css'

class EnterNumber extends Component {


    
    render() {

        return(
            <form>
                <button>Up</button>
                <input type="number"></input>
                <button>Down</button>
            </form>
        )
    }
}

export default EnterNumber;