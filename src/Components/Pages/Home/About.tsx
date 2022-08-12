import React from 'react'
import './About.css'
import terminal from './img/terminals.png'

const About = ():JSX.Element => {
  return (
    <div className='About'>
      <div className='About__profile'>
        <h3>About me</h3>
        <div className='About__img'></div>
      </div>
      <div className='About__description'>
        <p>
        My name is Antonio Rodriguez Aviles<br/>
        and I am an Industrial Engineer and student of Full stack developer.
        Motivated and focused, I like to solve problems and learn new technologies.
        </p>
      </div>
      <div className='About__resumen'>
        <h5>Resumen</h5>
        <div className='About__resumen__data'>
          <img src={terminal} alt="terminals"></img> <p>18</p><span>projects</span>
        </div>
        <div className='About__resumen__data'>
          <img src={terminal} alt="terminals"></img> <p>320</p>
        </div>
        <div className='About__resumen__data'>
          <img src={terminal} alt="terminals"></img> <p>320</p>
        </div>
      </div>
    </div>
  );
}

export default About;