import React from 'react';
import About from './About';
import Project from './Project';
import './Home.css'


function Home():JSX.Element {
  return (
    <div className='App__dashboard'>
      <h3>Hi, 👋</h3>
      <p>I am your friend and bootcamp student Toni.</p>
      <div className='App__About'>
        <About/>
      </div>
      <Project/>
    </div>
  );
}

export default Home;
