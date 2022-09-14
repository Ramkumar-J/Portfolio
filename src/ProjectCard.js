import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const [projectinfo,setProjectinfo] = useState(false);
  return (
    <div className="card">
      <div className="one">
      <a href={props.project.deploylink}>
      <img
        className="card-img-top project-image"
        src={props.project.image}
        onMouseEnter={() => setProjectinfo(true)}
        onMouseLeave={() => setProjectinfo(false)}
      ></img></a>
      <div className={`two ${projectinfo ? "" : "visually-hidden"}`}>
      <h4>Frontend</h4>
      <i class="bi bi-github"></i>
        <h4>Backend</h4>
        <i class="bi bi-github"></i>
        <h4>Livedemo</h4>
        <img className='img-fluid' src="https://img.icons8.com/glyph-neue/20/github.png"></img>
      </div>
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
