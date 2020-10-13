
import React, { Component } from 'react';
import $ from 'jquery';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Portfolio from '../Components/Portfolio';
import Resume from '../Components/Resume';
import Tech from '../Components/tech';
import Testimonials from '../Components/Testimonials';


class Abhay extends Component {

    constructor(props) {
      super(props);
      this.state = {
        foo: 'bar',
        resumeData: {}
      };
  
    }
  
    getResumeData() {
      $.ajax({
        url: '/resumeData.json',
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
        <>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Tech data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        {/* <Testimonials data={this.state.resumeData.testimonials} /> */}
        {/* <Contact data={this.state.resumeData.main} /> */}
        <Footer data={this.state.resumeData.main} />
    </>
      );
    }
  }

export default Abhay;
