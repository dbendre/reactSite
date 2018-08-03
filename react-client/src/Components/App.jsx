// component sotres routes for the various React routes used to navigate the website
// using React-Router:

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar/>
                    <Route name="name" exact path="/" component={HomePage}  />
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;