import React from 'react';

function ProjectCard() {
  return (
    <div className='card'>
      <img className='card-img-top' src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg"></img>
      <div className='card-body'>
        <h2 className='card-title text-dark text-center'>IE Tracker</h2>
        <p className='card-text text-dark'>IE tracker is used to Track your Incomes and Expenses</p>
        <p className='card-text'>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2 mb-2'>HTML</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>CSS</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>JS</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>Reactjs</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>Nodejs</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>mongoDB</span>
        </p> 
      </div>
    </div>
  )
}

export default ProjectCard;