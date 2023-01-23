import React from 'react'

function EducationCard(props) {
  return (
    // <div className='card w-50 border-start'>
    //   <div className='card-body'>
    //     <h3 className='card-title'>Fullstack development</h3>
    //     <p className='card-text'>Guvi Geek Technologies Pvt Ltd</p>
    //     <p className='card-text'>Jan 2022-June 2022</p>
    //   </div>
    // </div>
    <div className='container text-white' data-aos="fade-up-right">
    <div className='education-info border-start border-3 border-secondary p-3'>
      <h3 className='course-title text-danger fw-bolder'>{props.education.title}</h3>
      <h6 className=''>{props.education.institute}</h6>
      <p className='mb-0'>{props.education.duration}</p>
      <p className='mt-1'>{props.education.marks}</p>
    </div>
    </div>
  )
}

export default EducationCard;