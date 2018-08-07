// this file serves as the entry point of the application where we point to all our .jsx files

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

// import css styles
// import '../dist/styles.global.css';

// <App /> is the first component to be rendered to virtual DOM
ReactDOM.render(<App />, document.getElementById('app'));