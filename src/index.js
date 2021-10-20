import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutMe from "./AboutMe";
import Portfolio from './Portfolio';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
<Router>


<Switch>
          <Route exact path="/">
            <App/>
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>


</Router>,
  document.getElementById('root')
);

