import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './App.css'
import ColumnTodo from './Components/ColumnTodos/ColumnTodo';
import logo from './asset/bootcamp.webp'
import Home from './Components/Pages/Home/Home'
import Skills from './Components/Pages/Skills/Skills';
import CrudApp from './Components/CrudApp/CrudApp';


function App():JSX.Element {
  return (
    <>
    <div className='banner'>
      <p>LarnU bootcamp batch #1 🚀</p>
    </div>
    <div className='App'>
      <div className='App__Column'>
        <div className='App__Navigation'>
          <div className='App__logo'>
            <img src={logo} alt="logo bootcamp"/>
          </div>
          <nav>
            <ul>
              <li><Link to='/' className='App__link' id='dashboard'>Dashboard</Link></li>
              <li><Link to='/skills' className='App__link' id='skills'>Skills</Link></li>
              <li><Link to='/Todos' className='App__link' id='Todo'>My Todo's</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/Todos' element={<CrudApp/>}/>
      </Routes>
      <ColumnTodo/>
    </div>
    </>
  );
}

export default App;
