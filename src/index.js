import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import User from './components/user';
import Meal from './components/meal';

import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App} />
            <Route path='users' component={User} />
            <Route path='meals' component={Meal} />
        </Route>
    </Router>,
  document.getElementById('root')
);
