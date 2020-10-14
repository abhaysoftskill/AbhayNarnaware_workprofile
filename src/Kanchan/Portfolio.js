import React, { Component } from 'react';

class Portfolio extends Component {
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
        <section id="user2-portfolio">
        <div className="row left no-margin">
            <div className="col-lg-12  portfolio-part">
                <h2 className="">My
                    <span className="base-color-portfolio ">Works</span>
                </h2>
                <p>Checkout my work and design...</p>
            </div>
            <div className="col-lg-12 no-padding">
                <div className="row">
                    <div className="portf-menu no-padding" id="myBtnContainer">
                        <ul>
                            <li onclick="filterSelection('all')">All</li>
                            <li onclick="filterSelection('web')">Web Design</li>
                            <li onclick="filterSelection('ps')">Photoshop</li>
                            <li onclick="filterSelection('illu')">Illustrator</li>
                            
                        </ul>

                    </div>
                 
                </div>
            </div>
            <div className="col-lg-12 no-padding">
                <div className="row no-margin">
                    <div className="col-lg-3 portf-box-bg web">
                        <div className="portf-box">
                            <img src="/images/kanchan/work/11.jpg" />
                            <div className="portf-detail">
                                <div className="row no-margin top-M-workicon">
                                    <div className="col-lg-6">
                                        <div className="work-icon1">
                                            <i className="fa fa-link" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="work-icon2">
                                            <i className="fa fa-search-plus" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 icon-work-title">
                                        <h5>My Work</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  portf-box-bg illu">
                        <div className="portf-box">
                            <img src="/images/kanchan/work/22.jpg" />
                            <div className="portf-detail">
                                <div className="row no-margin top-M-workicon">
                                    <div className="col-lg-6">
                                        <div className="work-icon1">
                                            <i className="fa fa-link" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="work-icon2">
                                            <i className="fa fa-search-plus" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 icon-work-title">
                                        <h5>My Work</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 portf-box-bg ps">
                        <div className="portf-box">
                            <img src="/images/kanchan/work/33.jpg" />
                            <div className="portf-detail">
                                <div className="row no-margin top-M-workicon">
                                    <div className="col-lg-6">
                                        <div className="work-icon1">
                                            <i className="fa fa-link" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="work-icon2">
                                            <i className="fa fa-search-plus" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 icon-work-title">
                                        <h5>My Work</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 portf-box-bg web">
                        <div className="portf-box">
                            <img src="/images/kanchan/work/44.jpg" />
                            <div className="portf-detail">
                                <div className="row no-margin top-M-workicon">
                                    <div className="col-lg-6">
                                        <div className="work-icon1">
                                            <i className="fa fa-link" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="work-icon2">
                                            <i className="fa fa-search-plus" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 icon-work-title">
                                        <h5>My Work</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 portf-box-bg illu">
                        <div className="portf-box">
                            <img src="/images/kanchan/work/55.jpg" />
                            <div className="portf-detail">
                                <div className="row no-margin top-M-workicon">
                                    <div className="col-lg-6">
                                        <div className="work-icon1">
                                            <i className="fa fa-link" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="work-icon2">
                                            <i className="fa fa-search-plus" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 icon-work-title">
                                        <h5>My Work</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 portf-box-bg ps">
                        <div className="portf-box">
                            <img src="/images/kanchan/work/66.jpg" />
                            <div className="portf-detail">
                                <div className="row no-margin top-M-workicon">
                                    <div className="col-lg-6">
                                        <div className="work-icon1">
                                            <i className="fa fa-link" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="work-icon2">
                                            <i className="fa fa-search-plus" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 icon-work-title">
                                        <h5>My Work</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 portf-box-bg ps">
                        <div className="portf-box">
                            <img src="/images/kanchan/work/66.jpg" />
                            <div className="portf-detail">
                                <div className="row no-margin top-M-workicon">
                                    <div className="col-lg-6">
                                        <div className="work-icon1">
                                            <i className="fa fa-link" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="work-icon2">
                                            <i className="fa fa-search-plus" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 icon-work-title">
                                        <h5>My Work</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 portf-box-bg ps">
                        <div className="portf-box">
                            <img src="/images/kanchan/work/66.jpg" />
                            <div className="portf-detail">
                                <div className="row no-margin top-M-workicon">
                                    <div className="col-lg-6">
                                        <div className="work-icon1">
                                            <i className="fa fa-link" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="work-icon2">
                                            <i className="fa fa-search-plus" ></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 icon-work-title">
                                        <h5>My Work</h5>
                                    </div>
                                </div>
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

export default Portfolio;
