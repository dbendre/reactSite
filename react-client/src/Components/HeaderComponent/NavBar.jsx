import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkExt  from './LinkExt';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton">
                        <LinkExt to="">
                            Home
                        </LinkExt>
                        <LinkExt to=""> About </LinkExt>
                        <LinkExt to=""> Skills </LinkExt>
                        <LinkExt to=""> Projects </LinkExt>
                        <LinkExt to="" target="_blank">Resume</LinkExt>
                        {/*<Link to=""><a href="https://drive.google.com/file/d/1wWK861wYkwzRtfNvrZSBrYIARhpZ5D3a/view?usp=sharing"> Resume </a></Link>*/}
                        <LinkExt to=""> db Studios </LinkExt>
                    </li>
                </ul>
            </header>
        )
    }
}

export default NavBar;