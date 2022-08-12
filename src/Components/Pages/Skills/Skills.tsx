import React from 'react'
import softSkills from './img/speaking.png'
import Tecnical from './img/programing.png'
import Tool from './img/tool.png'
import './Skills.css'

const Skills = () => {
  return (
    <div>
      <div className='Skills'>
        <img src={softSkills} alt="softkills icon" width={32}/>
        <h2>Soft Skills</h2>
        <div className='Skills__span'>
          <span>Problem Solvers</span>
          <span>Design Thinking</span>
          <span>Teamwork</span>
          <span>Communicator</span>
          <span>Creativity and Flexibility</span>
          <span>English B1</span>
        </div>
      </div>
      <div className='Skills'>
        <img src={Tecnical} alt="softkills icon"/>
        <h2>Technical Skills</h2>
        <div className='Skills__span'>
          <span>Javascript</span>
          <span>Ruby</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Sass</span>
          <span>React</span>
          <span>Boostrap</span>
          <span>SEO</span>
        </div>
      </div>
      <div className='Skills'>
        <img src={Tool} alt="softkills icon"/>
        <h2>Tools</h2>
        <div className='Skills__span'>
          <span>Zoom</span>
          <span>Loom</span>
          <span>Slack</span>
          <span>Miro</span>
          <span>Git</span>
          <span>Jira</span>
          <span>Agile Methodologies</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;