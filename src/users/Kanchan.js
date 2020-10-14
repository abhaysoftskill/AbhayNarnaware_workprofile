
import React, { Component } from 'react';
import '../Kanchan/bootstrap.min.css';
import '../Kanchan/pink-color.css';
import './kanchan.css';

import $ from 'jquery';
import Header from '../Kanchan/Header';
import Home from '../Kanchan/Home';
import About from '../Kanchan/About';
import Resume from '../Kanchan/Resume';
import Portfolio from '../Kanchan/Portfolio';



class Kanchan extends Component {

    constructor(props) {
      super(props);
      this.state = {
        foo: 'bar',
        resumeData: {}
      };
  
    }
  
    getResumeData() {
      $.ajax({
        url: '/kanchanResumeData.json',
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState({ resumeData: data });
        }.bind(this),
        error: function (xhr, status, err) {
          console.log(err);
          alert(err);
        }
      });
    }
  
    componentDidMount() {
      this.getResumeData();
    }
  
    render() {
      return (
        <div id="user2">
        <Header data={this.state.resumeData.main} />
        <Home data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.main} />
        <Portfolio data={this.state.resumeData.main} />
    </div>
      );
    }
  }

export default Kanchan;
