import React from 'react';

function ProjectCard() {
  let projectData=[
    {
      image:"https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      title:"IE Tracker",
      list1:"IE tracker is used to Track your Incomes and Expenses",
      list2:"IE tracker",
      tool1:"HTML",
      tool2:"CSS",
      tool3:"JS",
      tool4:"Reactjs",
      tool5:"Nodejs",
      tool6:"mongoDB",
    },
  ]
  return (
    <div className='card'>
      {
      projectData.map(e => {
        return(
          <>
<img className='card-img-top' src={e.image}></img>
      <div className='card-body'>
        {/* <h2 className='card-title text-dark text-center'>IE Tracker</h2> */}
        <h2 className='card-title text-dark text-center'>{e.title}</h2>
        <ul className='card-list'>
          {/* <li>IE tracker is used to Track your Incomes and Expenses</li> */}
          <li>{e.list1}</li>
          <li>{e.list2}</li>
          {/* <li>IE tracker</li>
          <li>IE tracker</li> */}
        </ul>
        {/* <p className='card-text text-dark'>IE tracker is used to Track your Incomes and Expenses</p> */}
        <p className='card-text'>
        {/* <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2 mb-2'>HTML</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>CSS</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>JS</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>Reactjs</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>Nodejs</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>mongoDB</span> */}
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2 mb-2'>{e.tool1}</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>{e.tool2}</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>{e.tool3}</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>{e.tool4}</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>{e.tool5}</span>
        <span className='badge bg-danger rounded-pill text-dark fs-6 ms-2'>{e.tool6}</span>
        </p> 
      </div>
      </>
        )
      })
    }
      {/* <img className='card-img-top' src="https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021"></img> */}
      
    </div>
  )
}

export default ProjectCard;