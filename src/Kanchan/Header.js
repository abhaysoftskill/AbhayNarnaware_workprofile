import React, { Component } from 'react';

class Header extends Component {
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
      <header className="open">
                <div className="header-navbar h-100">
                    <a className="navbar-brand" href="#"><b>K</b><span>Kanchan</span></a>
                    <ul className="list-group menu text-center" id="menu">
                        <li className="list-group-item">
                            <a className="smoothscroll-2 active"  href="#user2-home">

                                <i className="fa fa-home" aria-hidden="true"></i>
                                <span>home</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#user2-about" className="smoothscroll-2">
                                <i className="fa fa-user-circle-o" aria-hidden="true"></i>

                                <span>about</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#user2-resume" className="smoothscroll-2">

                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                                <span>resume</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#user2-portfolio" className="smoothscroll-2">

                                <i className="fa fa-file-word-o" aria-hidden="true"></i>
                                <span>works</span>
                            </a>
                        </li>
                        {/* <li className="list-group-item">
                            <a href="#user2-blog" className="smoothscroll-2">

                                <i className="fa fa-th-large" aria-hidden="true"></i>
                                <span>blog</span>
                            </a>
                        </li> */}
                        <li className="list-group-item">
                            <a href="#user2-about" className="smoothscroll-2">

                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                <span>contact</span>
                            </a>
                        </li>
                    </ul>
                    <div className="menu-toggler open">
                        <span>
                            <i className="text-white lni-close"></i>
                        </span>
                    </div>
                </div>
            </header>
    );
  }
}

export default Header;
