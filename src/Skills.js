import React from 'react';

function Skills() {
  return (
    <div class="container">
      <div className='row mt-3'>
        <div className='col-lg-12'>
          <h1 className='text-center text-primary fw-bolder'>Skills</h1>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-lg-12'>
          <h3 className='text-center text-danger fw-bolder'>Frontend Tools</h3>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/color/100/html-5--v1.png"></img>
          <h6 className='ms-4 fw-bolder'>HTML5</h6>
        </div>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/color/100/css3.png"></img>
          <h6 className='ms-4 fw-bolder'>CSS3</h6>
        </div>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/color/100/bootstrap.png"></img>
          <h6 className='ms-4 fw-bolder'>Bootstrap</h6>
        </div>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/color/100/javascript--v1.png"></img>
          <h6 className='ms-4 fw-bolder'>JavaScript</h6>
        </div>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/plasticine/100/react.png"></img>
          <h6 className='ms-4 fw-bolder'>Reactjs</h6>
        </div>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid bg-warning' src="https://img.icons8.com/wired/100/postman-api.png"></img>
          <h6 className='ms-4 fw-bolder'>Postman</h6>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-lg-12'>
          <h3 className='text-center text-danger fw-bolder'>Backend Tools</h3>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/color/100/nodejs.png"></img>
          <h6 className='ms-4 fw-bolder'>Nodejs</h6>
        </div>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/color/100/mysql-logo.png"></img>
          <h6 className='ms-4 fw-bolder'>MySQL</h6>
        </div>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"></img>
          <h6 className='ms-4 fw-bolder'>mongoDB</h6>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-lg-12'>
          <h3 className='text-center text-danger fw-bolder'>Version Control Tools</h3>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/color/100/git.png"></img>
          <h6 className='ms-4 fw-bolder'>Git</h6>
        </div>
        <div className='col-4 col-sm-4 col-md-2 col-lg-2'>
          <img className='img-fluid' src="https://img.icons8.com/glyph-neue/100/github.png"></img>
          <h6 className='ms-4 fw-bolder'>Github</h6>
        </div>
      </div>
    </div>
  )
}

export default Skills;