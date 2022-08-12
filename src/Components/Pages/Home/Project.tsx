import React from 'react'
import './Project.css'
import cover1 from './img/reddit.webp'
import cover2 from './img/wheater.png'
import cover3 from './img/pokemondex.png'




const Project = () => {

  return (
    <div className='projects'>
      <div className='projects__title'>
        <h3>My projects</h3>
        <p>Crear</p>
      </div>
      <div className='projects__list'>
        <div className='projects__item'>
          <img src={cover1} alt="cover project" />
          <h4>Reddit clone</h4>
          <div className='project__time'>
          <p className='projects__time'>In process</p>
          </div>
          <p> challenge of codeacademy</p>
          <div className='project__span'>
            <p><i className="fa-brands fa-github"></i> Github</p>
          </div>
        </div>
        <div className='projects__item'>
          <img src={cover2} alt="cover project" />
          <h4>Weather App</h4>
          <div className='project__time'>
          <p className='projects__time'>Finish</p>
          </div>
          <p>Web app with vanilla JS, HTML, CSS</p>
          <div className='project__span'>
            <p><i className="fa-brands fa-github"></i> Github</p>
          </div>
        </div>
        <div className='projects__item'>
          <img src={cover3} alt="cover project" />
          <h4>Minimal Pokedex</h4>
          <div className='project__time'>
          <p className='projects__time'>Finish</p>
          </div>
          <p>Web App with Api pokemon and React </p>
          <div className='project__span'>
            <p><i className="fa-brands fa-github"></i> Github</p>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Project;