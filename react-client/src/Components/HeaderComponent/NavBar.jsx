import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton">
                        <Link to="">
                            Home
                        </Link>
                        <Link to=""> About </Link>
                        <Link to=""> Skills </Link>
                        <Link to=""> Projects </Link>
                        <Link to=""> Resume </Link>
                        <Link to=""> db Studios </Link>
                    </li>
                </ul>
            </header>
        )
    }
}

export default NavBar;