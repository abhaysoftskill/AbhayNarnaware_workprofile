import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Abhay from './users/Abhay';
import Home from './users/Home';
import Kanchan from './users/Kanchan';

class App extends Component {

  render() {
    localStorage.setItem("Abhay", "test");
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/abhay' component={Abhay} />
          <Route exact path='/kanchan' component={Kanchan} />
          <Redirect from="/*" to="/" />
        </Switch>
      
      
      </div>
    );
  }
}

export default App;
