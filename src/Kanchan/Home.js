import React, { Component } from 'react';

class Home extends Component {
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
        <section id="user2-home" className="hero-01 active dark-bg ">
        <div className="display-table ">
            <div className="display-content ">
                <div className="container ">
                    <div className="row justify-content-center hero-item ">
                        <div className="col-lg-12 col-12 part2 no-padding home-height">
                            <h1>Hey, I'm Kanchan  K <span className="hey">👋</span></h1>
                            <span className="element" data-elements="UI UX Designer.,Web Designer.,Graphics Designer."> UI / UX Designer</span>
                            <p>I design prototype & products that people love.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Home;
