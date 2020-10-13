import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Abhay from './users/Abhay';
import Home from './users/Home';

class App extends Component {

  render() {
    localStorage.setItem("Abhay", "test");
    return (
      <div className="App">
        <div className="logo">UIUXCX.com</div>
        <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/abhay' component={Abhay} />
          <Redirect from="/*" to="/" />
        </Switch>
      
      
      </div>
    );
  }
}

export default App;
