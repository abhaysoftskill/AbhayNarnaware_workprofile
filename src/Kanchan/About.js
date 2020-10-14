import React, { Component } from 'react';

class About extends Component {
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
        <section id="user2-about" >
        <div className="row no-margin left" id="">

            <div className="col-lg-12 col-12 about-part ">
                <h2>About
                    <span className="base-color-about ">Me </span>
                </h2>
                <p>I am a UI/UX designer based in Pune - India. I specialise in UI designing . I create beautiful, usable, professional websites and Apps using best practice accessibility and the latest W3C web standards guidelines, resulting in semantic and seo friendly. 

I’m constantly learning UX Design and other design related topics.  I love to travel, and I love my Work!</p>
                <div className="row  no-margin top-margin">
                    <div className="col-lg-4 col-12 about-img">
                        <div className="about-img">
                            <img className="img-responsive" src="/images/kanchan/smallimg.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 designation-title">
                        <h4 className="heading-color"><span>UI/UX </span> Designer & Web Designer</h4>
                        <div className="row no-margin top-marginaboutme">
                            <div className="col-lg-4 col-12 my-detail">
                                <h6 className="user-detail">Birthday:
                                    <small>April 15</small>
                                </h6>
                                <h6 className="user-detail">Website:
                                    <small>www.kanchan.com</small>
                                </h6>
                                <h6 className="user-detail">Phone:
                                    <small>7798567452</small>
                                </h6>
                                <h6 className="user-detail">City:
                                    <small>Pune, Maharashtra</small>
                                </h6>
                            </div>
                            <div className="col-lg-8 col-12">
                                <h6 className="user-detail">Degree:
                                    <small>Master</small>
                                </h6>
                                <h6 className="user-detail">Mail:
                                    <small ><a href="mailto:kanchanskill15@gmail.com">kanchanskill15@gmail.com </a></small>
                                </h6>
                                <h6 className="user-detail">Freelance:
                                    <small>Available</small>
                                </h6>
                            </div>
                            <div className="col-12">
                                <h6  className="heading-color user-detail" ><span>Ready to Join Immediate & WFH. </span>
                                  
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="col-lg-12 top-marginaboutme">
                <h4 className="heading-color">What <span>I'm Doing</span></h4>
            </div>
            
            <div className="col-lg-12 no-padding">
                <div className="row no-margin">
                    <div className="col-lg-4">
                        <div className="tbl1">
                            <h5>Graphic Design</h5>
                            <p>In a professional context it often happens that private clients corder a publication to be made.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="tbl1">
                            <h5>Mobile Layout Designing</h5>
                            <p>In a professional context it often happens that private clients corder a publication to be made.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tbl1">
                            <h5>Web Layout Designing</h5>
                            <p>In a professional context it often happens that private clients corder a publication to be made.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tbl1">
                            <h5>Creative Assets</h5>
                            <p>In a professional context it often happens that private clients corder a publication to be made.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="tbl1">
                            <h5>Logo's & Icons Designing</h5>
                            <p>In a professional context it often happens that private clients corder a publication to be made.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="tbl1">
                            <h5>Premium Slider</h5>
                            <p>In a professional context it often happens that private clients corder a publication to be made.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
    );
  }
}

export default About;
