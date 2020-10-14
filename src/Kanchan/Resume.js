import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
        <section id="user2-resume">
        <div className="row no-margin left font-color">
            <div className="col-lg-12  resume-part">
                <h2 className="">My
                    <span className="base-color-resume ">Resume</span>
                </h2>
                <p>In a professional context it often happens that private clients corder a publication to be made.</p>
            </div>
            <div className="col-lg-12 no-padding">
                <div className="row no-margin top-margin">
                    <div className="col-lg-6 ">
                        <h5 className="edu-exp-title">Education</h5>
                        <div className="timeline-items box-border normal-padding">
                            <div className="timeline-item">
                                <div className="timeline-icon"></div>
                                <div className="timeline-contents">
                                    <div className="time-line-header">
                                        <h6 className="timeline-title">Bachler In Computer Application</h6>
                                        <p className="timeline-year">2008 - 2011</p>
                                    </div>
                                    {/* <div className="timeline-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare.</p>
                                    </div> */}
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-icon"></div>
                                <div className="timeline-contents">
                                    <div className="time-line-header">
                                        <h6 className="timeline-title">Master In Computer Application</h6>
                                        <p className="timeline-year">2011 - 2014</p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-icon"></div>
                                <div className="timeline-contents">
                                    <div className="time-line-header">
                                        <h6 className="timeline-title">Internship at Dot net Developer </h6>
                                        <p className="timeline-year">2014 - 2015</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="edu-exp-title">Experience</h5>
                        <div className="timeline-items box-border normal-padding">
                            <div className="timeline-item">
                                <div className="timeline-icon"></div>
                                <div className="timeline-contents">
                                    <div className="time-line-header">
                                        <h6 className="timeline-title">Web Designer</h6>
                                        <p className="timeline-year">2015 - 2016</p>
                                    </div>
                                    <div className="timeline-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-icon"></div>
                                <div className="timeline-contents">
                                    <div className="time-line-header">
                                        <h6 className="timeline-title">UI/ UX Designer</h6>
                                        <p className="timeline-year">2016 - 2018</p>
                                    </div>
                                    <div className="timeline-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare.</p>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 ">
                <div className="row no-margin">
                    <div className="col-lg-6">
                        <div>
                            <h3 className="mb-0">Work <span className="base-color-resume"> Skills</span></h3>
                        </div>
                        <div id="skills" className="skill-box box-border">
                            <div className="skillbar clearfix" dataPercent="95%">
                                <div className="skillbar-title"><span>HTML</span></div>
                                <div className="skillbar-bar fill-skillbar" style={{width:'72%'}} ></div>
                                <div className="skill-bar-percent">72%</div>
                            </div>
                            <div className="skillbar clearfix " dataPercent="85%">
                                <div className="skillbar-title"><span>CSS</span></div>
                                <div className="skillbar-bar fill-skillbar" style={{width:'85%'}} ></div>
                                <div className="skill-bar-percent">85%</div>
                            </div>
                            <div className="skillbar clearfix" dataPercent="75%">
                                <div className="skillbar-title"><span>Photoshop</span></div>
                                <div className="skillbar-bar fill-skillbar" style={{width:'65%'}}  ></div>
                                <div className="skill-bar-percent">65%</div>
                            </div>
                            <div className="skillbar clearfix" dataPercent="80%">
                                <div className="skillbar-title"><span>Illustrator</span></div>
                                <div className="skillbar-bar fill-skillbar"  style={{width:'60%'}} ></div>
                                <div className="skill-bar-percent">60%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <h3 className="mb-0">Language <span className="base-color-resume"> Skills</span></h3>
                        </div>
                        <div className="language-bar box-border">
                            <div className="language-skill row">
                                <h4 className="col-6 text-left mb-0">Marathi <span> Fluent</span></h4>
                                <ul className="col-6 list-inline text-right mb-0">
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star-half-empty"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="language-skill row">
                                <h4 className="col-6 text-left mb-0">Hindi <span> Native</span></h4>
                                <ul className="col-6 list-inline text-right mb-0">
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star-half-empty"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="language-skill row">
                                <h4 className="col-6 text-left mb-0">English <span> Basic</span></h4>
                                <ul className="col-6 list-inline text-right mb-0">
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star-o"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Resume;
