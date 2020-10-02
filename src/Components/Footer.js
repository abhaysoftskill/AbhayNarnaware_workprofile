import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="new"><i className={network.className}></i></a></li>
      });
      var competencies = this.props.data.competencies.map(function(competencies){
        return <li key={competencies}>{competencies}</li>
      });
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul>
            <li>CORE COMPETENCIES</li>
           </ul>

           <ul className="copyright">
              {competencies}
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
