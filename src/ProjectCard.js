import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const [projectinfo,setProjectinfo] = useState(false);
  return (
    <div className="card">
      <div className="one">
      {/* <a href={props.project.deploylink}> */}
      <img
        className="card-img-top project-image"
        src={props.project.image}
        onMouseEnter={() => setProjectinfo(true)}
        onMouseLeave={() => setProjectinfo(false)}
      ></img>
      {/* </a> */}
      {/* <div className={`two ${projectinfo ? "" : "visually-hidden"}`}>
      <h4>Frontend</h4>
      <i class="bi bi-github"></i>
        <h4>Backend</h4>
        <i class="bi bi-github"></i>
        <h4>Livedemo</h4>
        <img className='img-fluid' src="https://img.icons8.com/glyph-neue/20/github.png"></img>
      </div> */}
      <ul className={`two ${projectinfo ? "" : "visually-hidden"}`}>
      Frontend
      <li className="three"> 
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
</a> 
</li>
Backend
      <li className="three"> 
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
</a> 
</li>
Livedemo
      <li> 
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-camera-reels" viewBox="0 0 16 16">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
</a> 
</li>
    
     
        {/* <h4>Backend</h4>
        <i class="bi bi-github"></i>
        <h4>Livedemo</h4>
        <img className='img-fluid' src="https://img.icons8.com/glyph-neue/20/github.png"></img> */}
      </ul>
      </div>
      <div className="card-body">
        <h2 className="card-title text-dark text-center">
          {props.project.title}
        </h2>
        <ul className="card-list">
          <li>{props.project.list1}</li>
          <li>{props.project.list2}</li>
        </ul>
        <p className="card-text">
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2 mb-2">
            {props.project.tool1}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool2}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool3}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool4}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool5}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool6}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
