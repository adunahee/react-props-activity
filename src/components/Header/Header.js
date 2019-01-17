import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <header>
                <h1>
                   Reacts Components and Props 
                </h1>
                <p>Enter a number. Then add or subtract it to your total. Try to find the minimum and maximum values for the total!</p>
            </header>
        )
    }
}

export default Header;