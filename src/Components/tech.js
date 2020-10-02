import React, { Component } from 'react';

class Tech extends Component {
  render() {

    if (this.props.data) {
      var techmessage = this.props.data.techmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} - {education.score} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        </div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.technologies}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
      var techSkills = this.props.data.tech.map(function (techSkills) {
        // var className = 'bar-expand ' + techSkills.name.toLowerCase();
        // return <li className='three columns main-col tech-item' key={techSkills.name}><span style={{ width: techSkills.level }} ></span><em>{designSkills.name}</em></li>
      
      return  <div class="three columns main-col tech-item" key={techSkills.technology}> <img class="tech" alt={techSkills.technology} src={`images/tech/${techSkills.img}`} /> <h5>{techSkills.technology}</h5><p>{techSkills.techExprience}</p></div>
      })
    }

    return (
      <section id="tech">

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>FAVORITE TECH</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{techmessage}
            </p>
          </div>
          <div className="twelve columns main-col">
            <div className="">
              <ul className="skills">
                {techSkills}  
                   
              </ul>

         
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tech;
