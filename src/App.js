import React, { Component, PropTypes as pt } from 'react';
import { Link } from 'react-router';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    static displayName = 'Topjava10App';

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <h3>Проект <a href="https://github.com/JavaWebinar/topjava10" target="_blank">Java Enterprise (Topjava)</a></h3>
                <hr/>
                <ul>
                    <li><Link to="/users">User List</Link></li>
                    <li><Link to="/meals">Meal List</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;
