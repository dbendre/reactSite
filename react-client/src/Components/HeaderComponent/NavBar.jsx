import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
                        <Redirect to="https://drive.google.com/file/d/1wWK861wYkwzRtfNvrZSBrYIARhpZ5D3a/view?usp=sharing" target="_blank">Resume</Redirect>
                        {/*<Link to=""><a href="https://drive.google.com/file/d/1wWK861wYkwzRtfNvrZSBrYIARhpZ5D3a/view?usp=sharing"> Resume </a></Link>*/}
                        <Link to=""> db Studios </Link>
                    </li>
                </ul>
            </header>
        )
    }
}

export default NavBar;