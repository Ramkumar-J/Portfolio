import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className="col-lg-12">
          <h1 className='text-center text-primary fw-bolder'>Projects</h1>
          </div>
          </div>
      <div className='row mt-5'>
        <div className="col-lg-4">
          <ProjectCard></ProjectCard>
        </div>
        <div className="col-lg-4">
        <ProjectCard></ProjectCard>
        </div>
        <div className="col-lg-4">
        <ProjectCard></ProjectCard>
        </div>
      </div>
      <div className='row mt-5'>
        <div className="col-lg-4">
          <ProjectCard></ProjectCard>
        </div>
        <div className="col-lg-4">
        <ProjectCard></ProjectCard>
        </div>
        <div className="col-lg-4">
        <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  )
}

export default Projects;