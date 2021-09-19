import React from "react";
import Jerry from "../../assets/Jerry.jpeg"
import "./style.css";

function AboutMe() {
  const skills = ['JavaScript', 'CSS', 'HTML', 'Bootstrap', 'React', 'JQuery', 'MySQL', 'MongoDB', 'Express', 'Handlebars', 'OOP', 'Node.js', 'Ajax', 'ES6', 'Git']
  return (
  <div className="row">
      <div className="col-md-9 col-sm-12">
          <div className="card bg-light">
              <div className="card-body">
                <h1 className="card-title" title="About Me"><span id="about">About</span> <span id='me'><strong>Me</strong></span></h1>
                <hr></hr>
                <div id="about-me-image">
                  <img src={Jerry} alt="Jerry Carmona" className="img-thumbnail shadow" title="Jerry Carmona"></img>
                </div>
                <div id="about-me">
                  <h3>school</h3>
                  <p>I graduated from California State University, Northridge in 2013 with a Bachelor of Art in Economics. I also just recently completed a Full Stack Web Development Boot Camp at UCLA.</p>
                  <h3>skills</h3>
                  <div id="skills">
                    {skills.map(skill => (
                      <p key={skill}><span className="skill">{skill}</span></p>
                    ))}
                  </div>
                </div>
                <div style={{clear: 'both'}}>
                  <hr></hr>
                  <p style={{textAlign: "center"}}>Click <a href="Assets/resume.pdf" target="_blank" title="resume">here</a> to view my current resume!</p>
                </div>
              </div>
          </div>
      </div>
  </div>
  );
}

export default AboutMe;