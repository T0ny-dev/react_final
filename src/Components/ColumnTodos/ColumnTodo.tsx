import React from 'react';
import './ColumnTodo.css'


function ColumnTodo(): JSX.Element {
  return (
    <div className='App__Todos'>
      <div className='App___Todos__title'>
        <h2>My Todo's list</h2>
      </div>
      <div className='App__Toods__list'>
        <div className='Todo'>
          <h5>Learn Ruby on Rails</h5>
          <p>Increse my skill in ruby</p>
        </div>
        <div className='Todo'>
          <h5>Learn TypeScript</h5>
          <p>read documentation</p>
        </div>
      </div>
      
    </div>
  );
}

export default ColumnTodo;
